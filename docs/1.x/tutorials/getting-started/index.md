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
<div id="download_hello_demo_python_snapshot"></div> 
</p>

 * Put the extracted `hello` directory into `my-pc/repo` directory.  
   * The `hello` package contains four components:   
     * **component_A**, **component_B**, and **component_C**: these components implements the HELLO service which has only one method `say_hello`. 
     * **hello_components**: this component provides a web interface on which the list of discovered components implementing the HELLO service are listed (we show the message returned by each component when calling the `say_hello` method).

The following picture depicts the web interface provided by the **hello_components** component and the underlying architecture of the application.

![Step 1 final result](getting-started-img-3.png)

 * In this first step of the tutorial, we want to instantiate only the components **HC** (hello_components), **A** (component_A) and **B** (component_B). In addition, we want to seperate between HC component and the other components providing the HELLO service (which can contain third-party code). COHORTE supports this separation by using **Isolates**. Isolates are a seperate process with all the needed runtime infrastructure allowing the execution of the managed components.
 <br/><br/>The following picture depicts the desired resilient architecture. If one of the components providing the HELLO service fails, there will be no impact on the HC component! 

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

You will notice some log outputs, when all is Ok, type the `load` command to start the application's composition:

 <pre>
$ <b>load</b>
<div style="font-size:70%">
Started composition: default-application -> b764f5eb-812c-4a2a-83f8-b3effa1e86ce
</div>
</pre>

 * To test your application, you need to know on which http port the `web` isolate is listening (as the HC component publish its web page using the same HTTP server as its isolate container). Type the `http` command to have this information.

<pre>
$ <b>http</b>
<div style="font-size:70%">
+------------+--------------------------------------+-----------+--------------------------------------+-------+
|    Name    |                 UID                  | Node Name |               Node UID               | HTTP  |
+============+======================================+===========+======================================+=======+
| components | 9fa3c812-64b0-499e-8b65-6ac5fe8bcf02 | my-pc     | 71c96fe6-5ce2-43c9-bafc-6f0905d8cf74 | 63625 |
+------------+--------------------------------------+-----------+--------------------------------------+-------+
| web        | ac0dd576-a7fb-4c34-b7ab-b68a810c38bc | my-pc     | 71c96fe6-5ce2-43c9-bafc-6f0905d8cf74 | <span style="color:red">63609</span> |
+------------+--------------------------------------+-----------+--------------------------------------+-------+
</div>
</pre>

In this case, its `63609`. Launch a web browser with this address to start the web interface: `http://localhost:63609/hello`.

<div class="note">
<span class="note-title">Note</span>
<p class="note-content">
You can fix the http port to use for your application using configuration files (see <a href="{{ site.baseurl }}/docs/1.x/startup">startup section of the documentation page</a>).
</p>
</div>

 * To stop COHORTE, type the `quit` command on the terminal.

### Step 2

In this second step, we will distribute our components among two nodes (which can be physically distributed on a local network area - or via Internet using an XMPP server).

 * Lets have the same architecture as the first step, and we add a new instance of component_C that should be deployed on a second node. 

![Step 2](getting-started-img-2.png)

 * Start by creating two nodes:

 <pre>
$ <b>cohorte-create-node</b> node1 hello-application-step2
$ <b>cohorte-create-node</b> node2 hello-application-step2
</pre>

Notice that we have given a second parameter to `cohorte-create-node` command. This parameter set an application ID for the two nodes. We should ensure that all participating nodes have the same application ID. 

 * Copy `hello` package used in the first step into the `repo directories of the two newly created nodes (you can also make symbolic links to avoid having two copies if your nodes are on the same machine).
 * Update `autorun_conf.js` file located on `node1/conf`:

{% highlight json %}
{
	"name" : "hello-application-step2",
	"root" : {
		"name" : "hello-application-step2-composition",
		"components" : [ 
			{
				"name" : "hello_components",
				"factory" : "hello_components_factory",
				"isolate" : "web",			
				"node" : "node1"
			}, {
				"name" : "component_A",
				"factory" : "component_A_factory",
				"isolate" : "components",
				"node" : "node1"
			}, {
				"name" : "component_B",
				"factory" : "component_B_factory",
				"isolate" : "components",
				"node" : "node1"
			}, {
				"name" : "component_C",
				"factory" : "component_C_factory",
				"isolate" : "components",
				"node" : "node2"
			}
		]
	}
}
{% endhighlight %}

*  Remove the generated `autorun_conf.js` file located on `node2/conf`. Indeed, `node1` will be considered as **Top Composer**, it will controls the application's composition in all the participating nodes.

* Go to `node1` directory and start it as a **Top Composer**:

<pre>
node1$ ./<b>run</b> -t
</pre>

* When started, type `load` command to start the application's composition (instantiation). 
* You can test this first part of the application as your `hello_components` component is instantiated in this node (*web isolates*). Follow the same steps as in the first part of this tutorial to find the http port and to launch the web interface. You notice that there is only two components A and B. This is because C component is specified to be instantiated on `node2` which is not yet started.

* In a separate terminal, start `node2` with a different *http* and *remote shell* ports (to avoid conflict with the first node - as they are hosted on the same physical machine):

<pre>
node2$ ./<b>run</b> 9000 9001
</pre>

Notice that we have started this node without the `-t` option. It is not a *Top Composer*, but just a participating node.

* Refresh the web interface of `hello_components` component. You will notice that the C component is detected and used by the HC component even it was deployed in a seperate remote node.

### Step 3

All the components used until now are implemented in Python (using [iPOPO component-based framework]({{ site.baseurl }}/docs/1.x/components)). We will extend our application by introducing a new component that implements the HELLO service in Java (component_D). 

 * Stop the running nodes of the previous step (use the command `quit`).
 * Donwload the bundle (jar file) containing the implementation of the D component.

<p>
<div id="download_hello_demo_java_snapshot"></div> 
</p>

 * Put the extracted `component_d.jar` file into the `repo` folder of the two nodes (`node1/repo` and `node2/repo`).
 * Update the `autorun_conf.js` file located on `node1/conf` to add this new component D. It should be instantiated on `node2` in the `components` isolate.

{% highlight json %}
{
	"name" : "hello-application-step2",
	"root" : {
		"name" : "hello-application-step2-composition",
		"components" : [ 
			{
				"name" : "hello_components",
				"factory" : "hello_components_factory",
				"isolate" : "web",			
				"node" : "node1"
			}, {
				"name" : "component_A",
				"factory" : "component_A_factory",
				"isolate" : "components",
				"node" : "node1"
			}, {
				"name" : "component_B",
				"factory" : "component_B_factory",
				"isolate" : "components",
				"node" : "node1"
			}, {
				"name" : "component_C",
				"factory" : "component_C_factory",
				"isolate" : "components",
				"node" : "node2"
			}, {
				"name" : "component_D",
				"factory" : "component_D_factory",
				"isolate" : "components",
				"node" : "node2"
			}
		]
	}
}
{% endhighlight %}

 * start the two nodes as explained in the previous step (*node1* as *Top Composer* and *node2* as a simple node with different http and remote shell ports).
 * Test the web interface. You will find that the `component_D` which is implemented in Java is also used by the `hello_components` component, implemented in Python. 
 * However, under the hood, COHORTE has created a seperate *components isolate* for this new component ( D ). This is because it is of different nature, it needs other runtime infrastructure than the Python components.

![Step 2](getting-started-img-4.png)

### Step 4

crash-test! TODO


[Home](../../../../) > [Documentation](../../) > [Tutorials](../)


<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_demos.json", function( data ) {            
            frame1 = "<a class='btn' href='" + data["snapshots"]["getting-started-python-distribution"]["files"]["zip"] + "'>hello_components.zip</a>"
            frame2 = "<a class='btn' href='" + data["snapshots"]["getting-started-java-distribution"]["files"]["zip"] + "'>hello_components_java.zip</a>"            
            $('#download_hello_demo_python_snapshot').html(frame1);
        });
    }
    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>
