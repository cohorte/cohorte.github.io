---
layout: page
title: Reference Guide
previous_page: ../applications
next_page: ../shell
---

[Home](../../../) > [Documentation](../)

## Startup


### Startup options

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> Option </th><th> Description </th>
	</tr>
	</thead>
	<tbody><tr>
		<td> -h / –help         </td><td> Show help </td>
	</tr>
	<tr>
		<td> -t / –top-composer </td><td> Run in “Top Composer” mode (only one Top Composer should be started) </td>
	</tr>
	<tr>
		<td> -c / –color        </td><td> Colored output (Linux, Mac) </td>
	</tr>
	<tr>
		<td> -d / –debug        </td><td> Debug mode (logs) </td>
	</tr>
	<tr>
		<td> -v / –verbose      </td><td> Verbose mode (logs and outputs) </td>
	</tr>
</tbody></table>



### Startup configurations

#### Composition configuration file

Talk about `autorun_conf.js`.

#### Other configurations

The following configuration files (located on `$COHORTE_HOME/conf` folder) are used by COHORTE for the initial configuration of the different internal components. You can override them by creating a file with the same name in your `$COHORTE_BASE/conf` folder.

> Boot configuration files

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
	<tr>
		<th> File               </th><th> Bundles &amp; Components  </th>
	</tr>
	</thead>
	<tbody><tr>
		<td> <a href src="#">boot-common.js</a>        </td><td> Pelix, iPOPO, Shell </td>
	</tr>
	<tr>
		<td> <a href src="#">boot-common-py.js</a>     </td><td> Pelix Remote Services, Cohorte Signals </td>
	</tr>
	</tbody>
	</table>

> Python Isolates configuration files

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>	
	<tr>
		<th> File               </th><th> Bundles &amp; Components  </th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td> <a href src="#">python-common-http.js</a> </td><td> HTTP Server </td>
	</tr>
	</tbody>
	</table>

> Java Isolates configuration files

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>	
	<tr>
		<th> File               </th><th> Bundles &amp; Components  </th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td> <a href src="#">java-common.js</a>        </td><td> iPOJO, Shell, Cohorte PyBoot, Isolate Base &amp; Utilities </td>
	</tr>
	<tr>
		<td> <a href src="#">java-common-http.js</a>   </td><td> HTTP Server </td>
	</tr>
	<tr>
		<td> <a href src="#">java-common-remote.js</a> </td><td> Cohorte Remote Services </td>
	</tr>
	<tr>
		<td> <a href src="#">java-common-signals.js</a> </td><td> Cohorte Signals, Signals Discovery </td>
	</tr>
	<tr>
		<td> <a href src="#">java-common-ui.js</a>     </td><td> Cohorte UI Admin </td>
	</tr>
</tbody></table>




[Home](../../../) > [Documentation](../)