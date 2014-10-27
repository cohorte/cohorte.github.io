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

* **Gatway** : any personal computer or integrated homebox that can hosts and runs the *aggregator* component as well as the *web interface* component.
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
	"name" : "temper-demo",
	"root" : {
		"name" : "temper-demo-composition",
		"components" : [ {
			/**
			 * Python sensor
			 */
			"name" : "temper-python-python",
			"factory" : "demo-temperature-fake-factory",
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
			"name" : "temper-python-raspi",
			"factory" : "demo-temperature-fake-factory",
			// Force placement
			"isolate" : "temper.raspi",
			"node" : "raspberry-pi"
		}, {
			/**
			 * Java sensor
			 */
			"name" : "temper-java",
			"factory" : "java-fake-temp-factory",
			"isolate" : "temper.java",
			"node" : "java-sensor-pc"
		}, {
			/**
			 * Aggregator component
			 */
			"name" : "aggregator",
			"factory" : "demo-sensor-aggregator-factory",
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
			"name" : "aggregator-UI",
			"factory" : "demo-sensor-aggregator-ui-factory",
			"language" : "python",
			"isolate" : "web.interface",
			"node" : "gateway",
			"properties" : {
				"servlet.path" : "/sensors"
			},
			"wires" : {
				"_aggregator" : "aggregator"
			}
		}, {
			/**
			 * Unity component
			 */
			"name" : "unity",
			"factory" : "demo-sensor-unity-factory",
			"language" : "python",
			"isolate" : "unity.app",
			"node" : "datashower"
		} ]
	}
}
{% endhighlight %}

[Home](../../../../) > [Documentation](../../) > [Tutorials](../)
