---
layout: page
title: Getting Started
comments: false
---

[Home](../) > [Documentation](./)

## Getting Started

Intended for new COHORTE users, this tutorial provides an step-by-step introduction to COHORTE, starting with a simple application using Python or Java programming language. All the resulting code can be found in [spellchecker-demo.zip](#) file, however we encourage you to follow the different steps of this tutorial to build your own fresh COHORTE application.

### Spellchecker application

The application to develop in this tutorial provides a web interface in which users can check the spell of their sentences in one or another language. It concists of three main type of components as shown in the following picture:

![SpellChecker Application]({{ site.baseurl }}/resources/images/getting-started/getting-started-img1.png)

<br/>

1. **Dictionary components**: implementing and providing the *Dictionary Service*. Each implementation indicates the language of the dictionary as a service property.
2. **Spell Checker**: implements the *Checker Service* which take as input a sentence of words, and by using the *Dictionary Service* it verifies the existance of misspelled words. It uses the adequate provided *Dictionary Service*s depending on user language choice. A list of missplened words are returned by this service.
3. **Spell Client**: is a simple web interface that shows a form to the final user to test the application. This component uses the *Checker Service* for the application's logic part, and it also requires an *HTTP Service* to publish the web interface and response to the form requests initiated by the user.

The required *HTTP Service* for the last component **Spell Client** is provided natively by the COHORTE runtime. No need to implement it! 


### Implement the different application components

To get started, choose first your favorite programming language.

<div class="language-choices">	
    <a style="left: 0%;" class="language-choice language-choice-python"
      href="./getting-started-python.html">Python</a>
	<a style="left: 30%;" class="language-choice language-choice-java"
      href="./getting-started-java.html">Java</a>
</div>

> **Notice** that you can have a COHORTE application with a mixte of Java and Python components!


The resulting Spell Client should look like this:

![SpellChecker Application]({{ site.baseurl }}/resources/images/getting-started/getting-started-img2.png)

The important quality of this architecture is the capability to update any component without restarting the global application. This is important for instance to allow adding new *Dictionary Service*s or updating a new efficient version of the **Spell Checker** component, without stopping the system.

Another important quality is the isolation between application components...


