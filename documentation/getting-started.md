---
layout: page
title: Getting Started
comments: false
---

[Home](../) > [Documentation](./)

## Getting Started

Intended for new COHORTE users, this tutorial provides step-by-step introduction to COHORTE, starting with a simple application using Python or Java programming language. All the resulting code can be found in [spellchecker-demo.zip](#) file, however we encourage you to follow the different steps of this tutorial to build your own fresh COHORTE application.

> The goal of this first tutorial is to highlight the Service-oriented Component-based approach to construct modular and dynamic software applications. Other features of COHORTE ([listed here](./what-is-cohorte.html)), are explored and explained in [other tutorials](./tutorials.html).

### Spellchecker application

The application to develop in this tutorial provides a web interface in which users can check the spell of their sentences in one or another language. It concists of three main type of components as shown in the following picture:

![SpellChecker Application]({{ site.baseurl }}/resources/images/getting-started/getting-started-img1.png)

<br/>

1. **Dictionary components**: implementing and providing the *Dictionary Service*. Each implementation indicates the language of the dictionary as a service property.
2. **Spell Checker**: implements the *Checker Service* which take as input a sentence of words, and by using the *Dictionary Service* it verifies the existance of misspelled words. It uses the adequate provided *Dictionary Service*s depending on user language choice. A list of missplened words are returned by this service.
3. **Spell Client**: is a simple web interface that shows a form to the final user to test the application. This component uses the *Checker Service* for the application's logic part, and it also requires an *HTTP Service* to publish the web interface and response to the form requests initiated by the user.

The required *HTTP Service* for the last component **Spell Client** is provided natively by the COHORTE runtime. No need to implement it! In the following, we show you how the different components are implemented in Python or Java programming languages.


### Implement the different application components

To get started, choose first your favorite programming language.

<div class="menu-choices">	
    <a style="left: 0%;" class="menu-choice menu-choice-python"
      href="./getting-started-python.html">Python</a>
	<a style="left: 30%;" class="menu-choice menu-choice-java"
      href="./getting-started-java.html">Java</a>
</div>

> **Notice** that you can have a COHORTE application made of a mixture of Java and Python components!


The resulting Spell Client looks like this:

![SpellChecker Application]({{ site.baseurl }}/resources/images/getting-started/getting-started-img2.png)

The important quality of this architecture is the capability to update any component without restarting the global application. This is important to allow adding new *Dictionary Service*s or updating a new efficient version of the **Spell Checker** component, without stopping the system and hence guaranting the continuity of business services.

The different application components can be deployed on different Isolates. This is important to ensure that a failure of one or more components does not affect the other ones. The isolation is managed automatically by COHORTE, this feature is explored with more details in [this tutorial](./tutorials.html).

