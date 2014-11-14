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

 As a COHORTE user, you need to have Java ( >= 1.6 ) and Python ( >= 3 ) installed on your system. Next, you need to [download and install COHORTE on your system]({{ site.baseurl }}/docs/1.x/setup).
 
 The objective of this getting started tutorial is to get you familiar with the COHORTE concept as quickly as possible. There is no need to start coding at this step. You found other advanced tutorial in the [tutorials section of the documentation page]({{ site.baseurl }}/docs/1.x/tutorials).
 This getting started tutorial is divised in four steps:

The following picture depicts the architecture of the to be developed application. It consists of a web interface provided by a component called `hello_components` which uses the **HELLO Service** to interact with all other components implementing this service (`component_A`, `component_B`, etc) and shows their greeting message in the web interface.

![Architecture](getting-started-img-3.png)

Hello components (implementing the **HELLO Service**) can be implemented using different programming languages (*Java* and *Python*) and can be placed in different remote nodes. Developers have not to worry about this details. COHORTE manages to have all the application components interacts as they where in one place (Using [Remote Services]({{ site.baseurl }}/docs/1.x/components)). 

 * In this first step of the tutorial, we want to instantiate only the components **HC** (hello_components), **A** (component_A) and **B** (component_B). In addition, we want to seperate between HC component and the other components providing the HELLO service (which can contain third-party code). COHORTE supports this separation by using **Isolates**. Isolates are a seperate process with all the needed runtime infrastructure allowing the execution of the managed components.
 <br/><br/>The following picture depicts the desired resilient architecture. If one of the components providing the HELLO service fails, there will be no impact on the HC component! 

<hr/>

 * **[STEP 1](#step1)**: creating a simple application on one node, but two seperate isolates. 
 * **[STEP 2](#step2)**: using two distributed nodes to host the same application (without changing the components implementation code).
 * **[STEP 3](#step3)**: using a mixture of Java and Python components.
 * **[STEP 4](#step4)**: crash-test

<hr/>

### <a name="step1"></a>STEP 1

 * Open a new terminal and type the following command on your working directory:

 <pre>
$ <b>cohorte-create-node</b> --node node1 --app step1
</pre>

This command will create a new directory named `node1` containing an executable `run` (which launches the created COHORTE node) and two folders `conf` (containing configuration files) and `repo` (where user bundles should be placed).

![Created node](getting-started-img-5.png)

 * Download the first bundle of this tutorial (no need to implement them in this getting started tutorial). 

<a href="#" class="btn btn-success">Download Hello Python Bundle</a>

<p>
<div id="download_hello_demo_python_snapshot"></div> 
</p>

 * Put the extracted `hello` directory into `node1/repo` directory.  
   * The `hello` package contains four components (implemented in Python):   
     * **component_A**, **component_B**, and **component_C**: these components implements the HELLO service which has only one method `say_hello`. 
     * **hello_components**: this component provides a web interface on which the list of discovered components implementing the HELLO service are listed (we show the message returned by each component when calling their `say_hello` method).



![Step 1](getting-started-img-1.png)

 * In order to have this deployment plan, you should edit the `node1/conf/composition.js` to specify the set of components that will be instantiated on each isolate.

{% highlight json %}
{
	"name" : "step1",
	"root" : {
		"name" : "step1-composition",
		"components" : [ 
			{
				"name" : "HC",
				"factory" : "hello_components_factory",
				"isolate" : "web"
			}, {
				"name" : "A",
				"factory" : "component_a_factory",
				"isolate" : "components"
			}, {
				"name" : "B",
				"factory" : "component_b_factory",
				"isolate" : "components"
			}
		]
	}
}
{% endhighlight %}

 * **It's done!** all what's you need to do now is to start `node1` node as follow:

 <pre>
$ ./<b>run</b> --app-id tuto1-application --top-composer
</pre>

The `--app-id` argument is required for each COHORTE node. If you have more than one node (as we will see further), all the nodes should be started with the same application's identifier. The `--top-composer` option means that this node is executed as a Top Composer. The Top Composer is responsable for calculating the distribution of the application's components.

 * To test your application, you need to know on which http port the `web` isolate is listening (as the HC component publish its web page using the same HTTP server as its isolate container). Type the `http` command to have this information.

<pre>
$ <b>http</b>
<div style="font-size:70%">
+------------+--------------------------------------+-----------+--------------------------------------+-------+
|    Name    |                 UID                  | Node Name |               Node UID               | HTTP  |
+============+======================================+===========+======================================+=======+
| components | 9fa3c812-64b0-499e-8b65-6ac5fe8bcf02 | node1     | 71c96fe6-5ce2-43c9-bafc-6f0905d8cf74 | 63625 |
+------------+--------------------------------------+-----------+--------------------------------------+-------+
| web        | ac0dd576-a7fb-4c34-b7ab-b68a810c38bc | node1     | 71c96fe6-5ce2-43c9-bafc-6f0905d8cf74 | <span style="color:red">63609</span> |
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

<hr/>

### <a name="step2">STEP 2

In this second step, we will distribute our components among two nodes (which can be physically distributed on a local network area - or via Internet using an XMPP server).

 * Lets have the same architecture as the first step, and we add a new instance of component_C that should be deployed on a second node. 

 Here is the new depoyment configuration for this case. 

![Step 2](getting-started-img-2.png)

COHORTE will instantiate the HC, A, and B components on Top Composer node. The component C is instantiate on each other node having the name "node2". This node can be located on another machine than the one executing the Top Composer.

In order to discover the nodes belonging to the same application, all the nodes should have the same *application-ID*. The following commands creates two nodes (node1 and node2) with the same *application-ID* `hello-application-step2`:

 <pre>
$ <b>cohorte-create-node</b> node1 hello-application-step2
$ <b>cohorte-create-node</b> node2 hello-application-step2
</pre>



 * Copy `hello` package used in the first step into the `repo directories of the two newly created nodes (you can also make symbolic links to avoid having two copies if your nodes are on the same machine).
 * Update `composition.js` file located on `node1/conf` as follow:

{% highlight json %}
{
	"name" : "hello-application-step2",
	"root" : {
		"name" : "hello-application-step2-composition",
		"components" : [ 
			{
				"name" : "HC",
				"factory" : "hello_components_factory",
				"isolate" : "web"
			}, {
				"name" : "A",
				"factory" : "component_a_factory",
				"isolate" : "components"
			}, {
				"name" : "B",
				"factory" : "component_b_factory",
				"isolate" : "components"
			}, {
				"name" : "C",
				"factory" : "component_c_factory",
				"isolate" : "components2",
				"node" : "node2"
			}
		]
	}
}
{% endhighlight %}

<div class="note">
<span class="note-title">Note</span>
<p class="note-content">
The C component is specified to be in another isolate named "components2", not "components". In the actual version of COHORTE you can not have two different isolates with the same name in two different nodes!
</p>
</div>

*  Remove the generated `composition.js` file located on `node2/conf`. Indeed, `node1` will be considered as **Top Composer**, it will controls the application's composition in all the participating nodes.

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

<hr/>

### <a name="step3">STEP 3

All the components used until now are implemented in Python (using [iPOPO component-based framework]({{ site.baseurl }}/docs/1.x/components)). We will extend our application by introducing a new component that implements the HELLO service in Java (component_D). 

 * Stop the running nodes of the previous step (use the command `quit`).
 * Donwload the bundle (jar file) containing the implementation of the D component.

<p>
<div id="download_hello_demo_java_snapshot"></div> 
</p>

 * Put the extracted `jar` file into the `repo` folder of `node2` node. 
 * Update the `composition.js` file located on `node1/conf` to add this new component D. It should be instantiated on `node2`.

{% highlight json %}
{
	"name" : "hello-application-step2",
	"root" : {
		"name" : "hello-application-step2-composition",
		"components" : [ 
			{
				"name" : "HC",
				"factory" : "hello_components_factory",
				"isolate" : "web"
			}, {
				"name" : "A",
				"factory" : "component_a_factory",
				"isolate" : "components"
			}, {
				"name" : "B",
				"factory" : "component_b_factory",
				"isolate" : "components"
			}, {
				"name" : "C",
				"factory" : "component_c_factory",
				"isolate" : "components2",
				"node" : "node2"
			}, {
				"name" : "D",
				"factory" : "component_d_factory",
				"isolate" : "components3",
				"node" : "node2"
			}
		]
	}
}
{% endhighlight %}

![Step 2](getting-started-img-4.png)

 * As you notice, components C and D should be deployed on two sperate isolates (*components2* and *components3*) as are implemented in two different languages.

 * start the two nodes as explained in the previous step (*node1* as *Top Composer* and *node2* as a simple node with different http and remote shell ports).
 * Test the web interface. You will find that the **D** component which is implemented in Java is also used by the **HC** component, implemented in Python. 

<hr/>

### <a name="step4">STEP 4

crash-test! 
Work in progress.. 


[Home](../../../../) > [Documentation](../../) > [Tutorials](../)


<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_demos_hello.json", function( data ) {            
            frame1 = "<a class='btn' href='" + data["snapshots"]["hello-python-distribution"]["files"]["zip"] + "'>hello_components.zip</a>"
            frame2 = "<a class='btn' href='" + data["snapshots"]["hello"]["files"]["jar"] + "'>hello_component_java.zip</a>"            
            $('#download_hello_demo_python_snapshot').html(frame1);
            $('#download_hello_demo_java_snapshot').html(frame2);
        });
    }
    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>
