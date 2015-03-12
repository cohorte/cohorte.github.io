---
layout: page
title: Documentation  - v.1.0
---


## Reference documentation

<div class="menu-choices">
    <a style="left: -10%;" class="menu-choice menu-choice-cohorte"
      href="{{ site.baseurl }}/docs/1.x/what-is-cohorte">What is Cohorte?</a>
    <a style="left: 19%;" class="menu-choice menu-choice-concepts"
      href="{{ site.baseurl }}/docs/1.x/key-concepts">Key Concepts</a>
    <a style="left: 48%;" class="menu-choice menu-choice-setup"
      href="{{ site.baseurl }}/docs/1.x/setup">Setup</a>
    <a style="left: 77%;" class="menu-choice menu-choice-component"
      href="{{ site.baseurl }}/docs/1.x/components">Components</a>    
</div>
<div class="menu-choices">      
      <a style="left: -10%;" class="menu-choice menu-choice-application"
      href="{{ site.baseurl }}/docs/1.x/compositions">Compositions</a> 
      <a style="left: 19%;" class="menu-choice menu-choice-startup"
      href="{{ site.baseurl }}/docs/1.x/startup">Startup</a>
      <a style="left: 48%;" class="menu-choice menu-choice-shell"
      href="{{ site.baseurl }}/docs/1.x/shell">Shell</a>
      <a style="left: 77%;" class="menu-choice menu-choice-monitoring"
      href="{{ site.baseurl }}/docs/1.x/monitoring">Monitoring</a>      
</div>

<!-- 
<div class="menu-choices">            
      <a style="left: -10%;" class="menu-choice menu-choice-ide"
      href="{{ site.baseurl }}/docs/1.x/ide">IDE</a>  
</div>
-->
You can download the full reference documentation as a [ ![PDF]({{ site.baseurl }}/resources/images/pdf.png) PDF](refdoc.html) file or read it in one [ ![PDF]({{ site.baseurl }}/resources/images/html.png) HTML](refdoc.html) file.


## Getting started tutorials

<!--div class="container">
  <div class="row">
    <div class="span4 doc-block">
      <h3><a href="{{ site.baseurl }}/docs/1.x/what-is-cohorte">What is COHORTE?</a></h3>
      <p>A brief introduction to have a clair idea about COHORTE project's goals.</p>
    </div>
    <div class="span4 doc-block">
      <h3><a href="{{ site.baseurl }}/docs/1.x/key-concepts">Key Concepts</a></h3>
      <p>Introduces some of the key concepts and terminology related to COHORTE.</p>
    </div>
    <div class="span4 doc-block">
      <h3><a href="{{ site.baseurl }}/docs/1.x/tutorials">Tutorials & demonstrations</a></h3>
      <p>Install COHORTE on your computer and start writing and running some COHORTE components!</p>
    </div>
    </div>
</div-->

Some resources to get started quickly:

 * [**Hello World Tutorial**](./tutorials/hello)
    <br/>Small Hello World introductory tutorial.

 * [**Robots Tutorial**](./tutorials/robots) 
    <br/>Highlighting the multi-language and distribution features of COHORTE in a simple, yet functional temperature monitoring application.

 * [**Temper Tutorial**](./tutorials/temper) 
    <br/>Highlighting the multi-language and distribution features of COHORTE in a simple, yet functional temperature monitoring application.

 * [**Spellcheker Tutorial**](./tutorials/spellchecker) 
    <br/>An introductory tutorial for Java and Python developers. It highlights the Service-oriented Component-based approach of the COHORTE platform.

 * [**Arduino LED Tutorial**](./tutorials/arduino-led)
    <br/>How to use COHORTE to export an Arduino micro-controller as a Service used by other components. 

## Articles and Presentations

* [COHORTE: Distributed and Reliable Service-Oriented Component-Model Applications]({{ site.baseurl }}/slides/overview) (slides)
   <br/>Quick overview of COHORTE Project

* [COHORTE Herald : Zero config transport abstraction layer allowing OSGi remote services over the NATs]({{ site.baseurl }}/slides/herald) (slides)
   <br/><img src="{{ site.baseurl }}/slides/herald/eclipse-day-lyon-2014.png"/>
   <br/>Overview of COHORTE Herald connectivity layer




## Scientific publications

* [A dynamic and service-oriented component model for python long-lived applications](http://www.isandlatech.com/__FR/pdfs/20120429%20cbse30-calmant.pdf). T. Calmant, J. C. Americo, O. Gattaz, D. Donsez, and K. Gama. In Proceedings of the 15th ACM SIGSOFT Symposium on Component Based Software Engineering, CBSE ’12, pages 35–40, New York, NY, USA, 2012. ACM.

## Other resources

COHORTE uses two main existing component models as underlying component-based software frameworks. If you are not yet familiar with iPOJO (Java programming) or iPOPO (Python programming) we encourage you to have a quick look to their respective web sites:

 * [Apache Felix iPOJO](http://felix.apache.org/documentation/subprojects/apache-felix-ipojo.html), a flexible and extensible service component model for Java developed by Clément Escoffier.
 * [Coderxpress iPOPO](https://ipopo.coderxpress.net), a service-oriented component model (SOCM) framework for Python developed by Thomas Calment.

 You need also to have a clear idea about the Service-Oriented Computing in general and OSGi specifications in particular.

 * [Service-Oriented Architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture): "Service-oriented architecture (SOA) is a software design and software architecture design pattern based on distinct pieces of software providing application functionality as services to other applications. This is known as service-orientation. It is independent of any vendor, product or technology." (from Wikipedia)
 * [OSGi Specification](http://osgi.org): "OSGi technology is a set of specifications that defines a dynamic component system for Java. These specifications reduce software complexity by providing a modular architecture for large-scale distributed systems as well as small, embedded applications." (from OSGi Foundation website)


