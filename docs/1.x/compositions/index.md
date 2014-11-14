---
layout: docpage
title: Reference Guide | Compositions
parent: Documentation
previous_page: ../components
next_page: ../startup
---

## Composition Specification

### Composition

{% highlight json %}
{
  // Composition's name
  "name": "composition-name",
 
  // Top composite
  "root": { /* see 'composite' */ }
}
{% endhighlight %}

### Composite

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

### Components

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
  "node" : "central"
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


### import-files

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
