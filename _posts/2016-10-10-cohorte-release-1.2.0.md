---
layout: page
title: Cohorte Platform 1.2.0 released
toc: false
comments: true
---

10 / 10 / 2016

The Cohorte team is pleased to announce the [release of Cohorte 1.12.0](/downloads/), which provides several improvements on the actual version of Cohorte.

This blog post provides a summary list of new features and improvements. The complete list is detailed on the [release-note file available here](http://forge.cohorte-technologies.com:6080/repository/cohorte-releases/org/cohorte/platforms/cohorte/1.2.0/cohorte-1.2.0-changelog.txt).

## New features

<div class="row">
	<div class="col-md-6">
		<h3>Official Docker image for Cohorte</h3>
		<p>We have provided a new Cohorte Docker image based on Centos 7 and JRE 7. The image is available at Docker Hub using <a href="https://hub.docker.com/r/cohorte/cohorte-runtime/">this address</a>.</p>
        <p><a href="#">Learn more about using Cohorte's Docker image</a></p>
	</div>
	<div class="col-md-6" >
		<img src="/resources/posts/2016-10-10/docker-logo.png"/>
	</div>
</div>

<div class="row"><br/><br/></div>

<div class="row">
	<div class="col-md-12" >
		<h3>Local Discovery</h3>
		<p>It is now possible to start a Cohorte node without specifiying the transport protocol. In this case, the isolates of the same node will be discoverted using a new local discovery protocol. The communication between isolates will use HTTP over the local internet address 127.0.0.1</p>		
	</div>		
</div>

## Improvements


<div class="row">
	<div class="col-md-6">
		<h3>Webadmin is now secured and more productive</h3>
		<p>Webadmin is a web page allowing to monitor the whole application in one space. Webadmin has received lot of attention in this release. We resume them in this list:</p>
		<ul>
			<li>Basic authentication securing the access to it</li>
			<li>A composition tab showing the actual composition file of the application</li>
			<li>Stopping buttons are now under a menu, not directly accessed</li>
			<li>Confirmation is required when stopping the application</li> 
			<li>We can now see the list of components, instances and logs of Java isolates</li>
		</ul>
	</div>
	<div class="col-md-6" >
		<img src="/resources/posts/2016-10-10/webadmin.png"/>
	</div>
</div>

<div class="row">
	<div class="col-md-12">
		<h3>One distribution for all platforms</h3>
		<p>Before this release, users have to download the adequate distribution to their operating system (Windows, Linux, or Mac OS X). Now we have a full distribution that supports the three platforms. When downloading the distribution, you have to call the setup script to prepare your freshly downloaded distribution to be adequate with your platform.</p>
	</div>
	
</div>

<div class="row">
	<div class="col-md-6">
		<h3>Update of Apache Felix to its latest version</h3>
		<p>We have updated the embeeded Apache Felix OSGi platform to its actual latest version (5.4.0). All the internal components are updated adequently. One important one is the Jetty Http Server which now supports Servlets 3.0+. </p>
	</div>
	<div class="col-md-6" >
		<img src="/resources/posts/2016-10-10/felix-logo.png"/>
	</div>
</div>


<div id="one-page-generator-end"></div>


Best Regards,

The Cohorte Team.
