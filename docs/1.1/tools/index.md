---
layout: docpage
title: Cohorte Scripts and Tools
parent: Documentation
toc: true
toc_numerate: true
toc_exclude: h1, h3, h4, h5, h6
previous_page: ../monitoring
next_page: ../../herald
---

Ensure that Cohorte is properly installed and $COHORTE_HOME environment variable is set.

## cohorte-version

This commands shows the actual installed version of Cohorte distribution.

{% highlight bash %}
$ cohorte-version

-----------------[ Installed COHORTE distribution ]--------------------

    - distribution : cohorte-macosx-distribution
    - version      : 1.1.0
    - stage        : dev
    - timestamp    : 20150701-233214
    - location     : /Users/debbabi/tools/cohorte

-----------------------------------------------------------------------	
{% endhighlight %}

* **distribution** : the name of the installed distribution (linux, windows, macosx, python)
* **version** : the version number
* **stage** : release or dev
* **timestamp** : when this distribution was built
* **location** : where is this distribution installed on your system 

## cohorte-update

This command allows you to update your installed distribution

{% highlight bash %}
[INFO] getting latest cohorte-macosx-distribution info (from internet)...

    +-----------+-----------------+-----------------+-----------------+
    |           | ACTUAL          | LATEST DEV      | LATEST RELEASE  |
    +-----------+-----------------+-----------------+-----------------+
    | version   | 1.1.0           | 1.1.0           | 1.0.0           |
    +-----------+-----------------+-----------------+-----------------+    
    | stage     | dev             | dev             | release         |    
    +-----------+-----------------+-----------------+-----------------+    
    | timestamp | 20150701-174741 | 20150701-182127 | 20150420-094900 |
    +-----------+-----------------+-----------------+-----------------+

[INFO] There is a new 'development' version!
     | Would you like to install it (yes/no)? or show its changelog (log)? _
{% endhighlight %}

It shows the installed distribution informations, as well as the latest available development build and the latest release. 

If a new development build is available, the tool propose you to update your distribution to that build version, or to upgrade to the latest release if available.

`cohorte-update` tool compresses and puts the actual distribution in `.archive` directory. You can rollback the previous installed version by adding `--roll-back` option.

## cohorte-create-node

See [Creating and Starting Nodes](../creating-starting-nodes/).

## cohorte-start-node

See [Creating and Starting Nodes](../creating-starting-nodes/).

## Shell commands

COHORTE has an integrated shell to allow users manipulate and monitor the system. 

You should start a Cohorte node using `--console` to get access to this integrated shell interface.

In the following, we detail the list of the provided shell commands.

### Manage COHORTE Platform

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> Option </th><th> Description </th>
	</tr>
	</thead>
	<tbody><tr><td>
<b>nodes</b>
</td><td>
		Lists the nodes visible from this isolate
</td></tr><tr><td>
<b>isolates</b> [&lt;node&gt;]
</td><td>
		Lists the isolates of the given node, or of all nodes
</td></tr><tr>
		<td>
<b>ping</b> [&lt;isolate&gt;]
</td><td>
		Checks if the given isolate (name or UID) is alive
</td></tr><tr><td>
<b>forker:stop</b> &lt;isolate&gt;
</td><td>
		Stops the given isolate (name or UID)
</td></tr><tr><td>
<b>shutdown</b> 
</td><td>
		Shutdown all the platform (all the nodes)
</td></tr>
</tbody>
</table>




### Other advanced commands

These commands are categorized by namespace.

#### "default" name space

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> Option </th><th> Description </th>
	</tr>
	</thead>
	<tbody><tr>
		<td>
<b>?</b> [&lt;command&gt;]
</td><td>	Prints the available methods and their documentation, or the documentation of the given command.
</td></tr><tr><td>
<b>bd</b> &lt;bundle_id&gt;
</td><td>
		Prints the details of the bundle with the given ID or name
</td></tr><tr><td>
<b>bl</b> [&lt;name&gt;]
</td><td>
		Lists the bundles in the framework and their state. Possibility to filter on the bundle name.
</td></tr><tr><td>
<b>close</b>
</td><td>
		Stops the current shell session (raises a KeyboardInterrupt exception)
</td></tr><tr><td>
<b>echo</b> ...
</td><td>
		Echoes the given words
</td></tr><tr><td>
<b>exit</b>
</td><td>
		Stops the current shell session (raises a KeyboardInterrupt exception)
</td></tr><tr><td>
<b>help</b> [&lt;command&gt;]
</td><td>
		Prints the available methods and their documentation, or the documentation of the given command.
</td></tr><tr><td>
<b>install</b> &lt;module_name&gt;
</td><td>
		Installs the bundle with the given module name
</td></tr><tr><td>
<b>loglevel</b> [&lt;level&gt;] [&lt;name&gt;]
</td><td>
		Prints/Changes log level
</td></tr><tr><td>
<b>properties</b>
</td><td>
		Lists the properties of the framework
</td></tr><tr><td>
<b>property</b> &lt;name&gt;
</td><td>
		Prints the value of the given property, looking into framework properties then environment variables.
</td></tr><tr><td>
<b>quit</b>
</td><td>
		Stops the current shell session (raises a KeyboardInterrupt exception)
</td></tr><tr><td>
<b>sd</b> &lt;service_id&gt;
</td><td>
		Prints the details of the service with the given ID
</td></tr><tr><td>
<b>sl</b> [&lt;specification&gt;]
</td><td>
		Lists the services in the framework. Possibility to filter on an exact specification.
</td></tr><tr><td>
<b>start</b> &lt;bundle_id&gt;
</td><td>
		Starts the bundle with the given ID
</td></tr><tr><td>
<b>stop</b> &lt;bundle_id&gt;
</td><td>
		Stops the bundle with the given ID
</td></tr><tr><td>
<b>sysprop</b> &lt;name&gt;
</td><td>
		Prints the value of the given environment variable
</td></tr><tr><td>
<b>sysprops</b>
</td><td>
		Lists the framework process environment variables
</td></tr><tr><td>
<b>thread</b> &lt;thread_id&gt;
</td><td>
		Prints details about the thread with the given ID (not its name)
</td></tr><tr><td>
<b>threads</b>
</td><td>
		Lists the active threads and their current code line
</td></tr><tr><td>
<b>uninstall</b> &lt;bundle_id&gt;
</td><td>
		Uninstalls the bundle with the given ID
</td></tr><tr><td>
<b>update</b> &lt;bundle_id&gt;
</td><td>
		Updates the bundle with the given ID
</td></tr>
</tbody>
</table>


#### "herald" name space (COHORTE messaging layer)

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> Option </th><th> Description </th>
	</tr>
	</thead>
	<tbody><tr>
		<td>
<b>fire</b> &lt;target&gt; &lt;subject&gt; ...
</td><td>
		Fires a message to the given peer.
</td></tr><tr><td>
<b>fire_group</b> &lt;group&gt; &lt;subject&gt; ...
</td><td>
		Fires a message to the given group of peers.
</td></tr><tr><td>
<b>forget</b> &lt;uid&gt;
</td><td>
		Forgets about the given message
</td></tr><tr><td>
<b>local</b>
</td><td>
		Prints information about the local peer
</td></tr><tr><td>
<b>peers</b>
</td><td>
		Lists known peers and their accesses
</td></tr><tr><td>
<b>post</b> &lt;target&gt; &lt;subject&gt; ...
</td><td>
		Post a message to the given peer.
</td></tr><tr><td>
<b>post_group</b> &lt;group&gt; &lt;subject&gt; ...
</td><td>
		Post a message to the given group of peers
</td></tr><tr><td>
<b>send</b> &lt;target&gt; &lt;subject&gt; ...
</td><td>
		Sends a message to the given peer(s). Prints responses in the shell.
</td></tr>
</tbody>
</table>

#### "ipopo" name space (Service-Oriented Component Model)

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> Option </th><th> Description </th>
	</tr>
	</thead>
	<tbody><tr>
		<td>
<b>factories</b> [&lt;name&gt;]
</td><td>
		Lists the available iPOPO component factories
</td></tr><tr><td>
<b>factory</b> &lt;name&gt;
</td><td>
		Prints the details of the given component factory
</td></tr><tr><td>
<b>instance</b> &lt;name&gt;
</td><td>
		Prints the details of the given component instance
</td></tr><tr><td>
<b>instances</b> [&lt;name&gt;]
</td><td>
		Lists the active iPOPO component instances
</td></tr><tr><td>
<b>instantiate</b> &lt;factory&gt; &lt;name&gt; [&lt;property=value&gt; ...]
</td><td>
		Instantiates a component of the given factory with the given name and properties
</td></tr><tr><td>
<b>kill</b> &lt;name&gt;
</td><td>
		Kills the given component instance
</td></tr><tr><td>
<b>waiting</b> [&lt;name&gt;]
</td><td>
		Lists the components waiting to be instantiated
</td></tr>
</tbody>
</table>



#### "shell" name space

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> Option </th><th> Description </th>
	</tr>
	</thead>
	<tbody><tr>
		<td>
<b>pids</b> [&lt;isolate&gt;]
</td><td>
		Prints the Process ID of the isolate(s)
</td></tr><tr><td>
<b>shells</b> [&lt;isolate&gt;] [&lt;kind&gt;]
</td><td>
		Prints the port(s) to access the isolate remote shell(s)
</td></tr>
</tbody>
</table>

#### "top" name space 

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> Option </th><th> Description </th>
	</tr>
	</thead>
	<tbody><tr>
		<td>
<b>dist</b> [&lt;filename&gt;=autorun_conf.js] [&lt;base&gt;=conf]
</td><td>
		Parses a composition and computes its node distribution
</td></tr><tr><td>
<b>dump</b> [&lt;node&gt;]
</td><td>
		Dumps the content of status
</td></tr><tr><td>
<b>load</b> [&lt;filename&gt;=autorun_conf.js] [&lt;base&gt;=conf]
</td><td>
		Instantiates the given composition
</td></tr><tr><td>
<b>read</b> [&lt;filename&gt;=autorun_conf.js] [&lt;base&gt;=conf]
</td><td>
		Reads a file
</td></tr><tr><td>
<b>stop</b> &lt;uid&gt;
</td><td>
		Kills the distribution with the given UID
</td></tr>
</tbody>
</table>
