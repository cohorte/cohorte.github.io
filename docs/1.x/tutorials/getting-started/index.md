---
layout: page
title: Getting started tutorial
comments: false
previous_page: ../
next_page: ../spellchecker
---

[Home](../../../../) > [Documentation](../../) > [Tutorials](../)

## Getting started tutorial

### Overview

 * As a COHORTE user, you need to have Java ( >1.6 ) and Python ( 3 ) installed on your system.
 * Next, you need to download and install COHORTE on your system ([detailed information are given in this page]({{ site.baseurl }}/docs/1.x/setup)).
 * The objective of this getting started tutorial is to get you familiar with the COHORTE concept as quickly as possible. There is no need to start coding at this step. You found other advanced tutorial in the [tutorials section of the documentation page]({{ site.baseurl }}/docs/1.x/tutorials).
 * This getting started tutorial is divised in four steps:
   * **STEP 1**: creating a simple application on one node, but two seperate isolates. 
   * **STEP 2**: using two distributed nodes to host the same application (without changing the components implementation code).
   * **STEP 3**: using a mixture of Java and Python components.
   * **STEP 4**: crash-test

### STEP 1

 * Open a new terminal and type the following command on your working directory:

 <pre>
$ <b>cohorte-create-node</b> my-pc
</pre>

This command will create a new directory named `my-pc` containing an executable `run` (which launches the created COHORTE node) and two folders `conf` (contains configuration files) and `repo` (contains components bundles).

 * Download the bundle of this tutorial's components (no need to implement them in this getting started tutorial). 

<p>
<div id="download_night_builds"></div> 
</p>

 * Put the extracted `hello` directory into `my-pc/repo` directory.  
   * The `hello` package contains four components:   
     * **component_A**, **component_B**, and **component_C**: these components implements the HELLO service which has only one method `say_hello`. 
     * **hello_components**: this component provides a web interface on which the list of discovered components implementing the HELLO service are listed (we show the message returned by each component when calling the `say_hello` method).

The following picture depicts the web interface provided by the **hello_components** component and the underlying architecture of the application.

![Step 1 final result](getting-started-img-3.png)

 * In this first step of the tutorial, we want to instantiate only the components **HC** (hello_components), **A** (component_A) and **B** (component_B). In addition, we want to seperate between HC component and the other components providing the HELLO service (which can contain third-party code). COHORTE supports this separation by using **Isolates**. Isolates are a seperate process with all the needed runtime infrastructure allowing the execution of the managed components.
 <br/> The following picture depicts the desired resilient architecture. 

![Step 1](getting-started-img-1.png)

 * In order to have this deployment plan, you should edit the `my-pc/conf/autorun_conf.js` to specify the set of components that will be instantiated on this node and on which isolate.

{% highlight json %}
{
	"name" : "default-application",
	"root" : {
		"name" : "default-application-composition",
		"components" : [ 
			{
				"name" : "hello_components",
				"factory" : "hello_components_factory",
				"isolate" : "web"
			}, {
				"name" : "component_A",
				"factory" : "component_A_factory",
				"isolate" : "components"
			}, {
				"name" : "component_B",
				"factory" : "component_B_factory",
				"isolate" : "components"
			}
		]
	}
}
{% endhighlight %}

 * **It's done!** all what's you need to do now is to start `my-pc` node as follow:

 <pre>
$ ./<b>run</b> -t
</pre>

You will notice some log outputs, when all is Ok, type the `load command to start the application's composition:

 <pre>
$ <b>load</b>
Started composition: default-application -> b764f5eb-812c-4a2a-83f8-b3effa1e86
</pre>

 * To test your application (launch the web interface), you need to now on which http port the `web` isolate is listening (as the HC component publish the web page on using the same HTTP server of its isolate container). Type the `http` command to have this information.

<pre style="font-size:55%">
$ <b>http</b>
+------------+--------------------------------------+-----------+--------------------------------------+-------+
|    Name    |                 UID                  | Node Name |               Node UID               | HTTP  |
+============+======================================+===========+======================================+=======+
| components | 9fa3c812-64b0-499e-8b65-6ac5fe8bcf02 | my-pc     | 71c96fe6-5ce2-43c9-bafc-6f0905d8cf74 | 63625 |
+------------+--------------------------------------+-----------+--------------------------------------+-------+
| web        | ac0dd576-a7fb-4c34-b7ab-b68a810c38bc | my-pc     | 71c96fe6-5ce2-43c9-bafc-6f0905d8cf74 | 63609 |
+------------+--------------------------------------+-----------+--------------------------------------+-------+
</pre>

In this case, its `63609`. Launch a web browser with this address to start the web interface: `http://localhost:63609/hello`.

<div class="note">
<span class="note-title">Note</span>
<p class="note-content">
You can fixe the http port to use for your application using configuration files (see <a href="{{ site.baseurl }}/docs/1.x/startup">startup section of the documentation page</a>).
</p>
</div>


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


<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_demos.json", function( data ) {            
            frame = "<a class='btn' href='" + data["snapshots"]["getting-started-tutorial-distribution"]["files"]["zip"] + "'>getting-started-tutorial.zip</a>"            
            $('#download_night_builds').html(frame);
        });
    }
    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>
