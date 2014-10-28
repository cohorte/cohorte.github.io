---
layout: page
title: Temper tutorial
comments: false
previous_page: ../spellchecker
next_page: ../quiz
---

[Home](../../../../) > [Documentation](../../) > [Tutorials](../)

## Temper tutorial

In this tutorial we will have a complete working temperature aggregation application with different type of components and deployment devices.

Let's first talk about the application's architecture.

### Application

The *temper* application has a *service-oriented architecture SOA* composed of components and services depicted in the following picture:

![Architecture](temper-img-1.png)

There are two services:

* **TEMPERATURE SERVICE**: this is the interface for all temperature sensor devices. Users can implement it in Python or Java while respecting the provided interface. It has three methods:
  * `get_name`: retrieves the name of the sensor.
  * `get_unit`: retrieves the values unit name.
  * `get_value`: retrieves the current value of the sensor.

* **AGGREGATOR SERVICE**: collects the temperature of the connected sensors (using the TEMPERATURE SERVIC) and stock them locally. The stocked information is used by third-party visualisation interfaces (*web interface* or *Unity 3D interface*) using the following methods:
  * `get_history`: retrieves the whole known history as a dictionary.
  * `get_sensor_history`: retrieves the known history for the given sensor.
  * `get_sensors`: retrieves the list of sensors visible in the history.
  * `get_active_sensors`: retrieves the list of active sensors.

### Deployment and runtime constraints

Now, its time to handle the deployment of these components. In this use case, we can have different type of execution machines:

* **Gateway** : any personal computer or integrated homebox that can hosts and runs the *aggregator* component as well as the *web interface* component.
* **PC with JVM installed** (java-sensor-pc): any personal computer that can hosts and runs  Java sensor components.
* **PC with Python installed** (python-sensor-pc): any personal computer that can hosts and runs Python sensor components.
* **Raspberry-Pi** : any Raspberry-Pi device that can hosts and runs Python sensor component.
* **PC with Unity installed** (datashower): any personal computer that can hosts and runs the *Unity 3D engine*. 

COHORTE provides a [*composition language*]({{ site.baseurl }}/docs/1.x/applications) which helps administrators fixing some rules concerning the deployment and instantiation of application components. 

The following picture depicts the graphical notation of the resulting specification for this use case:

![Deployment](temper-img-2.png)

Legend:

* **JS**: Java temperature Sensor
* **PC**: Python temperature Sensor
* **A**: temperature Aggregator 
* **UI**: web User Interface
* **U**: Unity 3D interface 

The following XML file represents the XMl equivalent for this deployment and composition specification:

{% highlight json %}
{
	"name" : "temper-app-v1",
	"root" : {
		"name" : "temper-app-v1-composition",
		"components" : [ 
			{
			/**
			 * Python sensor
			 */
			"name" : "PS",
			"factory" : "python-sensor-factory",
			"isolate" : "temper.python",
			"node" : "python-sensor-pc",
			"properties" : {
				"temper.value.min" : -5,
				"temper.value.max" : 45
			}
		}, {
			/**
			 * Raspberry Pi sensor
			 */
			"name" : "PS-raspi",
			"factory" : "python-sensor-factory",
			"isolate" : "temper.raspi",
			"node" : "raspberry-pi"
		}, {
			/**
			 * Java sensor
			 */
			"name" : "JS",
			"factory" : "java-sensor-factory",
			"isolate" : "temper.java",
			"node" : "java-sensor-pc"
		}, {
			/**
			 * Aggregator component
			 */
			"name" : "A",
			"factory" : "aggregator-factory",
			"language" : "python",
			"isolate" : "aggregation",
			"node" : "gateway",
			"properties" : {
				"poll.delta" : 1
			}
		}, {
			/**
			 * Aggregator web UI
			 */
			"name" : "UI",
			"factory" : "aggregator-ui-factory",
			"language" : "python",
			"isolate" : "web.interface",
			"node" : "gateway",
			"properties" : {
				"servlet.path" : "/temper"
			},
			"wires" : {
				"_aggregator" : "aggregator"
			}
		}
		]
	}
}
{% endhighlight %}


### COHORTE Nodes

We have created and prepared the different COHORTE nodes for each of the targeted machines. Each node contains the necessary bundles deployed on the `repo` directory and configuration files on the `conf` directory.

<p>
<div id="download_temper_snapshot"></div> 
</p>

As first step, we will execute our temper application in a local network area (LAN). You should have the devices with the listed requirements above. However, you can also test your application in only one machine having all the requirements installed (JVM and Python). The `raspberry-pi` COHORTE node needs a real raspberry-pi device to work properly (some libraries are compiled for ARM platform).

### Execution

#### Temperature Aggregator

To have a distributed configuration of COHORTE applications, we need to select one node as a **Top Composer**. It will parse the *composition configuration* and push orders to the participating nodes to instantiate the different components. 

You can create a new Node and start it as a Top Composer, or start any of the provided nodes as a Top Composer (using -t option). 

In the following, we choose the `gateway` node as Top Composer.

<pre>
gateway$ <b>./run</b> -t
</pre>

You should start the composition (deployment of components) manually by typing the `load` command.

{% highlight bash %}
> load
{% endhighlight %}

We can already test the application by opening a web browser and hiting this address: `http://localhost:port/temper`. You should however put the right *http port* of the `web.interface` isolate executing the web interface (see the *temper-demo* composition picture above). Type `http` command in the terminal to have the list of isolates and their *http ports*.

--IMAGE

You notice that there is no input in the history table as no temperature sensor is active.

<div class="note">
<span class="note-title">Note</span>
<p class="note-content">
Ensure to have COHORTE properly <a href="{{ site.baseurl }}/docs/1.x/setup">installed on your devices</a>. You should have $COHORT_HOME environment variable set with the full path to the COHORTE installation folder and $COHORTE_HOME/bin folder is added to your $PATH. 
</p>
</div>

#### Temperature Sensors

It's time now to start the temperature sensors. The provided components provides dummy values for simplicity. You can implement your temperature sensor component as detailed at the end of this tutorial.

* Start the `python-sensor-pc` node with a different *http* and *shell* ports configuration:

<pre>
python-sensor-pc$ <b>./run</b> 38001 38002 
</pre>

You will notice new entries in the active devices list of the aggregator web interface corresponding to this newly started sensor node (containing a temperature sensor component).

You can also start the `java-sensor-pc` node to test it. Ensure to put another http and shell ports configuration.

To test the `raspberry-pi` node, you should have a real *raspberry-pi* device connected to the local network. 

Notice that you can run copies of java or python sensor nodes in multiple devices without changing anything. 

[Home](../../../../) > [Documentation](../../) > [Tutorials](../)
