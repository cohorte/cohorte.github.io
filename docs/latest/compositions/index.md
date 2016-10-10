---
layout: docpage
title: Compositions Specification
parent: Documentation
toc: true
toc_numerate: true
toc_exlude: h1, h4, h5, h6
previous_page: ../components
next_page: ../creating-starting-nodes
---

This specification is used to describe the composition of the final application in term of components that should be instantiated in which isolate of which node.

A `composition.js` file which describes the composition of the application is located on the `conf` directory of the *Top Composer* node. The Top Composer dispatchs this specification to other nodes of the application.    

## Composition

{% highlight json %}
{
  // Composition's name
  "name": "composition-name",
 
  // Top composite
  "root": { /* see 'composite' */ }
}
{% endhighlight %}

## Composite

{% highlight json %}
{
  // Name of composite
  "name": "composite1",
 
  // List of components
  "components" : [ /* see 'components' */ ],
 
  // List of sub-composites
  "composites" : [
     {
       "name": "subcomposite",
       "components" : [ /* ... */ ]
       // this composite hasn't sub-composites.
     }
  ]
}
{% endhighlight %}

## Components

{% highlight json %}
{
  // Name of the component
  "name" : "aggregator-UI",
  // Name of its Component Factory
  "factory" : "demo-sensor-aggregator-ui-factory",
  // Indication on the implementation language
  "language" : "python",
  // Location on a precise isolate
  "isolate" : "aggregator.ui",
  // Location on a precise node
  "node" : "central",
  // Initial configuration of the component
  "properties" : {
    "servlet.path" : "/sensors"
  },
  // Wiring with another component named 'aggregtor' 
  // which can be found in any composite of this composition
  "wires" : {
    "_aggregator" : "aggregator"
  },
  "filters" : {
    "_handler": "(ready=1)"
  }
}
{% endhighlight %}


## import-files

`base.js`

{% highlight json %}
{
  "root": "root",
  "imported": {
    "top-value": "top",
    "answer": 42,
    // Import from another file
    "import-files": ["imported.js"]
  }
}
{% endhighlight %}

`imported.js`

{% highlight json %}
{
  // New property
  "hello": "World",
  // This value will be overloaded by the high level property's value
  "answer": 51
}
{% endhighlight %}

Obtained result : 

{% highlight json %}
{
  "root": "root",
  "imported": {
    // Non modified value
    "top-value": "top",
    // Conserved value
    "answer": 42,
    // New property
    "hello": "world"
  }
}
{% endhighlight %}


## Complete example

{% highlight json %}
{
  "name" : "hello-world",
  "root" : {
    "name" : "hello-worldd-composition",
    "components" : [ 
      {
        "name" : "Hello_Components",
        "factory" : "hello_components_factory",
        "node" : "node1",
        "isolate": "web"
      }, {
        "name" : "A_component",
        "factory" : "component_a_factory",
        "node" : "node1"
      }, {
        "name" : "B_component",
        "factory" : "component_b_factory",
        "node" : "node1"
      }, {
        "name" : "E_component",
        "factory" : "component_e_factory",
        "node" : "node1"
      }, {
        "name" : "C_component",
        "factory" : "component_c_factory",        
        "node" : "node2"
      }, {
        "name" : "D_component",
        "factory" : "component_d_factory",
        "node" : "node2"
      }
    ]
  }
}
{% endhighlight %}