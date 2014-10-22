---
layout: page
title: Getting started tutorial
comments: false
previous_page: ../
next_page: ../spellchecker
---

[Home](../../../../) > [Documentation](../../) > [Tutorials](../)

## Getting started tutorial

### Step 1

![Step 1](getting-started-img-1.png)

`step1/autorun_conf.js`
{% highlight json %}
{
	"name" : "hello-demo-app-step2",
	"root" : {
		"name" : "hello-demo",
		"components" : [ {
			"name" : "hello_components",
			"factory" : "hello_components_factory",
			"language" : "python",
			"isolate" : "web"
		}, {
			"name" : "component_A",
			"factory" : "component_A_factory",
			"language" : "python",
			"isolate" : "components"
		}, {
			"name" : "component_B",
			"factory" : "component_B_factory",
			"language" : "python",
			"isolate" : "components"
		}, {
			"name" : "component_C",
			"factory" : "component_C_factory",
			"language" : "python",
			"isolate" : "components"
		}  ]
	}
}
{% endhighlight %}

### Step 2

![Step 2](getting-started-img-2.png)

`step2/autorun_conf.js`
{% highlight json %}
{
	"name" : "hello-demo-app-step2",
	"root" : {
		"name" : "hello-demo",
		"components" : [ {
			"name" : "hello_components",
			"factory" : "hello_components_factory",
			"language" : "python",
			"isolate" : "web",			
			"node" : "node1"
		}, {
			"name" : "component_A",
			"factory" : "component_A_factory",
			"language" : "python",
			"isolate" : "components",
			"node" : "node1"
		}, {
			"name" : "component_B",
			"factory" : "component_B_factory",
			"language" : "python",
			"isolate" : "components",
			"node" : "node1"
		}, {
			"name" : "component_C",
			"factory" : "component_C_factory",
			"language" : "python",
			"isolate" : "components",
			"node" : "node2"
		}  ]
	}
}
{% endhighlight %}

If the two COHORTE nodes are located on the same physical machine, you should override the HTTP service port.

`node2/conf/boot-forker.js`
{% highlight json %}
{
	"import-files" : [ "boot-forker.js" ],

	"composition" : [
	{
		"name" : "pelix-http-service",
		"properties" : {
			"pelix.http.port" : 9000
		}
	}, {
		"name" : "pelix-remote-shell",
		"properties" : {
			"pelix.shell.port" : 9001
		}
	} ]
}
{% endhighlight %}


[Home](../../../../) > [Documentation](../../) > [Tutorials](../)
