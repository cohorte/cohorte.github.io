---
layout: page-full-width
title: Documentation  - v1.1
---




<table class="table">
<tr>
<td style="width:50%; padding-left:10px">

<h2>Reference Material</h2>

<p><i>Cohorte 1.1 Reference documentation:</i></p>
<ol>
  <li>  <a href="./what-is-cohorte"><b>What is Cohorte?</b></a> </li>
  <li>  <a href="./key-concepts"><b>Key Concepts</b></a> 
      <ul>
        <li>Service-Oriented Components</li>
        <li>Isolates</li>
        <li>Nodes</li>
        <li>Composers</li>
      </ul>
  </li>
  <li>  <a href="./setup"><b>Download and install COHORTE distribution</b></a> </li>
  <li>  <a href="./getting-started"><b>Getting Started with Cohorte in 10 minutes</b></a> 
      <ul>
        <li>Creating Cohorte Nodes</li>
        <li>Implementing Service-Oriented Components</li>
        <li>Writting the Composition specification</li>
        <li>Starting the Nodes</li>
        <li>Monitoring the different Isolates</li>
      </ul>
  </li>

  <li>  <a href=""><b>Supported Service-Oriented Component models</b></a> 
      <ul>
        <li>Pelix iPOPO (Python)</li>
        <li>Apache Felix iPOJO (Java)</li>
      </ul>
  </li>
  <li>  <a href="./compositions"><b>Composition Specification</b></a>  </li>
  <li>  <a href="./creating-starting-nodes"><b>Creating and Starting Cohorte Nodes</b></a>  </li>
  <li>  <a href="./monitoring"><b>Monitoring and Debuging Cohorte Application</b></a> </li>
  <li>  <a href="./tools"><b>Cohorte scripts and tools</b></a> 
      <ul>
        <li> cohorte-version </li>
        <li> cohorte-update  </li>
        <li> cohorte-create-node </li>
        <li> cohorte-start-node </li>
        <li> Shell commands </li>
      </ul>
  </li>
  <li>  <a href="{{ site.baseurl }}/docs/herald"><b>Herald : Discovery and Transport Framework</b></a></li>
  
  <!--
  <li>  <a href="./components">Components</a> </li>         
  <li>  <a href="./compositions">Compositions</a> </li>
  <li>  <a href="./startup">Startup</a> </li>
  <li>  <a href="./shell">Shell</a> </li>
  <li>  <a href="./monitoring">Monitoring</a> </li>      
  -->
</ol>

<hr/>

<p>You can download the full reference material as an <a href="{{ site.baseurl }}/resources/images/html.png"><img src="{{ site.baseurl }}/resources/images/html.png"/> HTML</a> file.</p>

<hr/>

<p>Old documentation</p>

<ul>
  <li><a href="{{ site.baseurl }}/docs/1.x/">Cohorte v1.0</a></li>
</ul>

</td>
<td style="width:50%; padding-left:10px">
  
<h2>Tutorials</h2>

<p><i>Some resources to get started quickly:</i></p>

<ul>
 <li> <a href="./getting-started"><b>Getting Started tutorial</b></a>
    <br/>Getting started with Cohorte in 10 minutes.</li>
     
 <li> <a href="./tutorials/hello"><b>Hello World Tutorial</b></a>
    <br/>Small Hello World introductory tutorial.</li>

 <li> <a href="./tutorials/robots"><b>Robots Tutorial</b></a>
    <br/>Highlighting the multi-language and distribution features of COHORTE in a simple, yet functional temperature monitoring application.</li>

 <li> <a href="./tutorials/temper"><b>Temper Tutorial</b></a> 
    <br/>Highlighting the multi-language and distribution features of COHORTE in a simple, yet functional temperature monitoring application.</li>

 <li> <a href="./tutorials/spellchecker"><b>Spellcheker Tutorial</b></a>
    <br/>An introductory tutorial for Java and Python developers. It highlights the Service-oriented Component-based approach of the COHORTE platform.</li>

 <li> <a href="./tutorials/arduino-led"><b>Arduino LED Tutorial</b></a> 
    <br/>How to use COHORTE to export an Arduino micro-controller as a Service used by other components. </li>
</ul>


</td>
</tr>
</table>


## Slides and Presentations

<table class="table table-striped">
<tr>
<td style="width=33%">
<a href="{{ site.baseurl }}/slides/overview">COHORTE: Distributed and Reliable Service-Oriented Component-Model Applications</a> (slides)
   <br/>Quick overview of COHORTE Project

</td>
<td style="width=33%">
<a href="{{ site.baseurl }}/slides/herald">COHORTE Herald: Zero config transport abstraction layer allowing OSGi remote services over the NATs</a> (slides)
   <br/><img src="{{ site.baseurl }}/slides/herald/eclipse-day-lyon-2014.png"/>
   <br/>Overview of COHORTE Herald connectivity layer
</td>
<td style="width=33%">
<a href="{{ site.baseurl }}/slides/cloud-demo">COHORTE Cloud and LEDs demo: The deployment af a COHORTE application as an IBM Bluemix service</a> (slides)
   <br/><img src="{{ site.baseurl }}/slides/cloud-demo/LogoiBMBluemixSmall.png"/>
   <br/>Demonstration of a COHORTE application deployed as an IBM Bluemix service  
</td>
</tr>
</table>


## Scientific publications

* [A dynamic and service-oriented component model for python long-lived applications](http://www.isandlatech.com/__FR/pdfs/20120429%20cbse30-calmant.pdf). T. Calmant, J. C. Americo, O. Gattaz, D. Donsez, and K. Gama. In Proceedings of the 15th ACM SIGSOFT Symposium on Component Based Software Engineering, CBSE ’12, pages 35–40, New York, NY, USA, 2012. ACM.

* [Self-managed Component-based Software Architecture for Business Process Management](http://icac2015.imag.fr) B. Debbabi, T. Calmant, O. Gattaz, S. Massonnat, P. Emin. Accepted demo in International Conference on Autonomic Computing, Grenoble FRANCE.

## Other resources

COHORTE uses two main existing component models as underlying component-based software frameworks. If you are not yet familiar with iPOJO (Java programming) or iPOPO (Python programming) we encourage you to have a quick look to their respective web sites:

 * [Apache Felix iPOJO](http://felix.apache.org/documentation/subprojects/apache-felix-ipojo.html), a flexible and extensible service component model for Java developed by Clément Escoffier.
 * [Coderxpress iPOPO](https://ipopo.coderxpress.net), a service-oriented component model (SOCM) framework for Python developed by Thomas Calment.

 You need also to have a clear idea about the Service-Oriented Computing in general and OSGi specifications in particular.

 * [Service-Oriented Architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture): "Service-oriented architecture (SOA) is a software design and software architecture design pattern based on distinct pieces of software providing application functionality as services to other applications. This is known as service-orientation. It is independent of any vendor, product or technology." (from Wikipedia)
 * [OSGi Specification](http://osgi.org): "OSGi technology is a set of specifications that defines a dynamic component system for Java. These specifications reduce software complexity by providing a modular architecture for large-scale distributed systems as well as small, embedded applications." (from OSGi Foundation website)


