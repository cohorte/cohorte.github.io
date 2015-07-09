---
layout: docpage
title: Supported Service-Oriented Component models
parent: Documentation
toc: true
toc_numerate: true
toc-exclude: h1, h4, h5, h6
previous_page: ../setup
next_page: ../compositions
---

## Overview

A COHORTE application is composed of a set of components requiring and providing services. These components can be located in one node or dispatched between a set of nodes.

In a classical component-based frameworks, components are instantiated statically at a predefined locations. They are also configured to communicate together before starting the application. This leads to a situation in which a lot of configuration files should be managed or to recompile the components if the communication aspects are hard coded.

In contrast, COHORTE Components are instantiated, configured and placed in the right node automatically. There is no need to implement the distribution related aspects like serialization or client/server interaction. Components are seen as black-boxes wired by *declared* (remote) services. 

<!-- 

To understand how COHORTE components could be implemented in different languages and could be distributed in different nodes, the following picture provides some insights about the underlying architecture of COHORTE and its main technologies.

![Main Modules](components-img-1.png)

## Cohorte Isolates

What is ? Service Oriented Runtime

OSGi specification 

Java and Python Implementations

-->

## Service Oriented Component Models (SOCM)

To implement COHORTE *managed* components, COHORTE supports two main, already existing component-based frameworks : 

 * Apache Felix iPOJO (Java)
 * Pelix/iPOPO (Python)

If you are already familiar with one of the two frameworks, all whats you have to do in order to get your components managed by COHORTE is to not instantiate them (using `@Instantiate` annotation or its XML equivalent). COHORTE will instantiate them automatically. To have benefits of Remote Services feature, your services should use primitive types instead of complex user-specific types. 

The following picture shows a component requiring and providing services.

<p style="text-align:center;">
  <img src="components-img-2.png"/>
</p>


## Supported SOCMs

In this section, we will provide a brief introduction to the supported Service Oriented Component Models in COHORTE.

### OSGi / Apache Felix iPOJO

iPOJO is a component-based service-oriented framework that works on OSGi platforms. Components in iPOJO are simple Java classes décorated with annotations to provide, require or define callbacks when the stat of the component change. 

<table class="table table-striped table-condensed">
<tr><th>Apache Felix iPOJO (Java) </th></tr>
<tr><td>

{% highlight java %}
@Component("AggregatorFactory")
@Provides
public class Aggregator implements ITemperature {
  @Requires List<ISensor> sensors;
  @Requires IStore store;

  @Validate public void start( ) {
  /* Do something to regulate 
  temperature depending on room's 
  internal temperature. */
  }
}
{% endhighlight %}

</td></tr>
</table>

If your class provides several interfaces (services), you should specify which of them are exported as remote services or not.

<div class="note">
<span class="note-title">Note</span>
<p class="note-content">
By default, all the components instantiated using Cohorte are exported as <b>Remote Services</b>.<br/>
You need to explicitly reject the export of services by adding a provides service property:  <code>IRemoteServicesConstants.PROP_EXPORT_REJECT</code> as showed on the following example.
</p>
</div>

{% highlight java %}
package org.example;

import org.osgi.framework.Constants;
import org.cohorte.remote.IRemoteServicesConstants;

@Component("AggregatorFactory")
@Provides(specifications = ITemperature.class, properties = {        
        @StaticServiceProperty(name = IRemoteServicesConstants.PROP_EXPORT_REJECT,
                type = "String",
                value = "org.example.IController") })
public class Aggregator implements ITemperature, IController {
  // ...
}

{% endhighlight %}

For more information about iPOJO, feel free to visite the [official web site here](http://felix.apache.org/documentation/subprojects/apache-felix-ipojo.html).

### Pelix / iPOPO 

iPOPO is a python implementation, iPOJO like service-oriented component-based framework. It adds the missing modularity for Python projects. 

iPOPO run on Pelix runtime (which is an implementation of part of OSGi specification on Python). iPOPO components uses decorators simular to those found on iPOJO, and could consume services implemented in Java using iPOJO component-model (using Cohorte's Remote Services).  

<table class="table table-striped table-condensed">
<tr><th>Pelix iPOPO (Python) </th></tr>
<tr><td>
	
{% highlight python %}
@Component("AggregatorFactory")
@Provides("java:/Itemperature")
@Requires("sensors", "java:/ISensor", aggregate=True)
@Requires("store", "java:/IStore")
class Aggregator(object):
  def __init__(self):
    self.sensors = []
    self.store = None

  @Validate 
  def start(self): 
    """
    Do something useful to regulate 
    temperature depending on room's
    internal temperature.
    """
    pass
{% endhighlight %}

</td></tr>
</table>


<div class="note">
<span class="note-title">Note</span>
<p class="note-content">
For interoperability between Java and Python components, we should add <code>java:/</code> prefix to the required services on Python components.
</p>
</div>

### C# support

Partial support using IronPython.

### Other legacy code

Wrapping in iPOPO (Python) or iPOJO (Java) components
