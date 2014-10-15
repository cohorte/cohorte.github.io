---
layout: page
title: Getting Started Python
comments: false
---

[Home](../../) > [Documentation](../) > [Getting Started](../getting-started.html)

## COHORET for Python

Welcome to COHORTE for Python! With COHORTE, you can build modular and resilient applications using the [Python programming language](https://www.python.org), and take advantage of the many benefits of the COHORTE approach (see [what is COHORTE?](./what-is-cohorte.html)).  

In this tutorial, we will implement the awesome **spellchecker** application detailed in the [getting started](../getting-started.html) page.

![SpellChecker Application]({{ site.baseurl }}/resources/images/getting-started/getting-started-img1.png)

### Implementation

In this section, we will detail how the different components are implemented. For simplicity, we will not use a modern Integrated Developement Environment like eclipse, we rather create simple text files for the different Python code implementing our application components.

> Check [this page](../reference-guide/ide.html) for instructions on how to use your prefered IDE like Eclipse (PyDev) or IDEA (PyCharm).

First, create a directory called `spellchecker`on which you will put the different components.
A COHORTE Component is implemented in python as a simple module with some specific class and method decorators. The following python code `spell_dictionary_EN.py` shows the implementation of the **English Dictionary** component.

#### English Dictionary
[spell_dictionary_EN.py](https://github.com/isandlaTech/cohorte-demos/blob/master/spellchecker/bundles/spellchecker-python/src/main/python/spellchecker/spell_dictionary_EN.py)
{% highlight python %}
from pelix.ipopo.decorators import ComponentFactory, Property, Provides, \
    Validate, Invalidate

@ComponentFactory("spell_dictionary_en_factory")
@Provides("dictionary_service")
@Property("_language","language","EN")
class SpellDictionary(object):
    def __init__(self):
        self._dictionary = None
        self._language = None

    @Validate
    def validate(self, context):
        self._dictionary = {"hello" , "world", "welcome", "to", "cohorte"}

    @Invalidate
    def invalidate(self, context):
        self._dictionary = None

    def check_word(self, word):
        word = word.lower().strip()
        return not word or word in self._dictionary

{% endhighlight %}

We have a simple Python class called `SpellDictionary`. This class is decorated with three different decorators imported from the package `pelix.ipopo`. This package is our underlying component-based framework used in COHORTE (called iPOPO). 

 * `@ComponentFactory` allows COHORTE to consider this class as a *component factory* which is an object used to instantiate $Component*s of the class `SpellDictionary` at runtime. The name given between parenthesis will be used to describe the overall application (see further). 

 * `@Provides` make this component as a service provider for the service given between parenthesis (*dictionary_service*). This service has one method (*check_work*) that any provider should implement. 

 * `@Property` add some contextual properties to the provider implementation of the service. Here in this example, we add the property *language* and set its value `EN`. When another component requires the *dictionary_service*, it can filter the providers depending on this properties (for instance take only dictionary providers for english language).

In addition to this class decorators, we have also two method decorators:

 * `@Validate` lets the COHORTE runtime calls the decorated method when the component instance is lanched and in a valid statee.

 * `@Invalidate` lets the COHORTE runtime calls the decorated method when the component is not valid (dependencies are not resolved for instance).

For more information about iPOPO component-model, check its [wiki website](http://ipopo.coderxpress.net). 

#### Spell Checker

[spell_checker.py](https://github.com/isandlaTech/cohorte-demos/blob/master/spellchecker/bundles/spellchecker-python/src/main/python/spellchecker/spell_checker.py)

{% highlight python %}
from pelix.ipopo.decorators import ComponentFactory, Provides, \
    Validate, Invalidate, Requires, BindField, UnbindField
import re

@ComponentFactory("spell_checker_factory")
@Provides("checker_service")
@Requires("_dictionaries", "dictionary_service", aggregate=True)
class SpellChecker(object):
    def __init__(self):
        self._dictionaries = []
        self.languages = {}
        self.punctuation_marks = None

    @BindField('_dictionaries')
    def bind_dict(self, field, service, svc_ref):
        language = svc_ref.get_property('language')
        self.languages[language] = service

    @UnbindField('_dictionaries')
    def unbind_dict(self, field, service, svc_ref):
        language = svc_ref.get_property('language')
        del self.languages[language]

    @Validate
    def validate(self, context):
        self.punctuation_marks = set((',',';','.','?','!',':', ' '))

    @Invalidate
    def invalidate(self, context):
        self.punctuation_marks = None

    def check(self, paragraph, language="EN"):
        error_list = []
        checked_list = re.split("([!,?.:; ])", paragraph)
        try:
            dictionary = self.languages[language]
        except KeyError:
            return None
        return [word for word in checked_list
                if word not in self.punctuation_marks \
                and not dictionary.check_word(word)]

{% endhighlight %}

This second component provides *checker_service* service, and it requires *dictionary_service*s. Notice that we have set the *aggregate* option of the `@Requires`decorator to *true* so that all the possible providers of the *dictionray_service* service are injected in the specified class attribute *_dictionaries*. 

In addition to already explained decorators used in the first component, this second one uses two others:

 * `@BindField`: calls the decorated method when a new provider of the *dictionray_service* is detected at runtime. In this case, we want to get the service property *language* to construct a map of <language/provider> peers. 
 * `@UnbindField`: calls the decorated method when one provider of the *dictionary_service* in no longer available. We update our internal map in response to this change. 

The *checker_service* implemented by this component has one methdd *check*. It takes a paragraph and a language parameters and uses the found *dictionary_service* providers to check the spell of paragraph's words. This service is used by the next component *Spell Client*.

#### Spell Client 

[spell_client.py](https://github.com/isandlaTech/cohorte-demos/blob/master/spellchecker/bundles/spellchecker-python/src/main/python/spellchecker/spell_client.py)


{% highlight python %}
from pelix.ipopo.decorators import ComponentFactory, Provides, Property, \
    Validate, Invalidate, Requires
from pelix.utilities import to_str
import pelix.remote
try:
    import urllib.parse as urlparse
except ImportError:
    import urlparse

@ComponentFactory("spell_client_factory")
@Provides(specifications='pelix.http.servlet')
@Property('_path', 'pelix.http.path', "/spellchecker")
@Requires("_checker", "checker_service")
@Property('_reject', pelix.remote.PROP_EXPORT_REJECT, ['pelix.http.servlet'])
class SpellClient(object):
    def __init__(self):
        self._path = None
        self._checker = None

    def do_GET(self, request, response):
        query = request.get_path()
        query = query[query.rfind('?')+1:]
        data = urlparse.parse_qs(query)
        paragraph = ""
        language = ""
        result = ""
        try:
            paragraph = data['paragraph'][0]
            language = data['language'][0]
            language = language.upper()
            misspelled_words = self._checker.check(paragraph, language)
            if misspelled_words is None:
                result = 'Dictionary provider for this language is not installed!'
            else:
                if not misspelled_words:
                    result = 'All words are well spelled !'
                else:
                    result = "The misspelled words are: " + " ".join(misspelled_words)
        except (KeyError, IndexError):
            result = "Fill the language and paragraph inputs!"
        content = """<html>
    <head>
    <title>SpellChecker</title>
    </head>
    <body>
    <h2>Spellchecker Demo</h2>
    <hr/>
    <form action="/spellchecker" method="get" >
    Language: <input type="radio" name="language" value="EN">EN  
              <input type="radio" name="language" value="FR">FR 
              <input type="radio" name="language" value="CN">CN<br/>
    Paragraph: <input type="text" name="paragraph" size="50"/><br/>
    <input type="submit" value="Check"/>
    </form>
    <hr/>
    <b>{result}</b>
    <hr/>
    </body>
    </html>""".format(result=result)
        response.send_content(200, content)
{% endhighlight %}

This last component implements and provides the *pelix.http.servlet* so that it will be called by the web server when a request arrives. The *HTTP Service* provider (included in COHORTE) call the *do_GET* method of this component. In our example, we return via the response object a valid html page with a form asking the user to put his sentence and choose a language.

### Startup

To start running your awesome first COHORTE application, you need to [download COHORTE Platform](../../downloads) in your local machine. Extract the dowloaded file anywhere in your file system and create the *environment Variable* **$COHORTE_HOME** which has as value the location in which you have extracted COHORTE Platform archive file. 

Next, you need to launch your application... 

{% highlight sh %}
sh run.sh -t -c
{% endhighlight %}

> For more setup and startup configurations, please check the [Reference Guide](../reference-guide.html) page.

### Monitoring

![SpellChecker Application]({{ site.baseurl }}/resources/images/getting-started/getting-started-imgX.png)

[Home](../../) > [Documentation](../) > [Getting Started](../getting-started.html)
