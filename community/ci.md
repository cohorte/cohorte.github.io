---
layout: page
title: Community | Continuous Integration
comments: true
---

[Home](../) > [Community](./)

## Continuous Integration

### General Build Process

![Build Process]({{ site.baseurl }}/resources/images/community/build-process.png)

 * **(1)** push changes to dev branches in GitHub

 * **(2)** night builds of the dev branches

 * **(3a)** send rapport email to developers

 * **(3b)** update snapshots
    * deploy java snapshot files to repo.isandlatech.com/maven/snapshots
    * deploy python wheels to repo.isandlatech.com/pypi/dev

  

### GitHub

### IsandlaTech Repositories

### Jenkins

#### Java Projects

![Build Process]({{ site.baseurl }}/resources/images/community/build-pipeline.png)

A trigger is installed on `cohorte-utilities` (at midnight) to fire the build pipeline of java projects.

## Current Sprint

{% highlight xml %}

DEV-1.0.0

[m] : maven module
[p] : python module
(d) : dependency to other cohorte modules

MAIN MODULES
============

[m] org.cohorte.jabsorb:org.jabsorb.ng:1.1.0-SNAPSHOT (bundle)

[m] org.cohorte.utilities:cohorte-utilities:1.0.0-SNAPSHOT (pom)
   [m] :org.cohorte.utilities:1.0.0-SNAPSHOT (eclipse-plugin)

[m] org.cohorte.remote:cohorte-remote-services:1.2.0-SNAPSHOT (pom)
   [m] :org.cohorte.remote.api: (bundle)
   [m] :org.cohorte.remote.utilities: (bundle)
      (d) :org.cohorte.remote.api: 
   [m] :org.cohorte.remote.core: (bundle)
      (d) :org.cohorte.remote.api:
      (d) :org.cohorte.remote.utilities:
   [m] :org.cohorte.remote.dispatcher.servlet: (bundle)  
      (d) :org.cohorte.remote.api:
      (d) :org.cohorte.remote.utilities:  
      (d) org.cohorte.jabsorb:org.jabsorb.ng:1.1.0-SNAPSHOT
   [m] :org.cohorte.remote.discovery.multicast: (bundle)
      (d) :org.cohorte.remote.api:
      (d) :org.cohorte.remote.utilities:
      (d) :org.cohorte.remote.dispatcher.servlet:
      (d) org.cohorte.jabsorb:org.jabsorb.ng:1.1.0-SNAPSHOT
   [m] :org.cohorte.remote.jabsorbrpc: (bundle)
      (d) :org.cohorte.remote.api:
      (d) :org.cohorte.remote.utilities:
      (d) org.cohorte.jabsorb:org.jabsorb.ng:1.1.0-SNAPSHOT
   
[m] org.cohorte.herald:cohorte-herald:0.0.2-SNAPSHOT (pom)
   [m] :org.cohorte.herald.api: (bundle)
   [m] :org.cohorte.herald.core: (bundle)
      (d) :org.cohorte.herald.api:
   [m] :org.cohorte.herald.http: (bundle)
      (d) :org.cohorte.herald.api:
      (d) org.cohorte.jabsorb:org.jabsorb.ng:1.1.0-SNAPSHOT
   [m] :org.cohorte.herald.rpc: (bundle)
      (d) :org.cohorte.herald.api:
      (d) org.cohorte.jabsorb:org.jabsorb.ng:1.1.0-SNAPSHOT
      (d) org.cohorte.remote:org.cohorte.remote.api:1.2.0-SNAPSHOT
      (d) org.cohorte.remote:org.cohorte.remote.utilities:1.2.0-SNAPSHOT

[m] org.cohorte.runtime:cohorte-java:1.0.0-SNAPSHOT (pom)
   [m] :org.cohorte.pyboot: (eclipse-plugin)
   [m] :org.cohorte.pyboot.api: (eclipse-plugin)
   [m] :org.cohorte.pyboot.config: (eclipse-plugin)
   [m] :org.cohorte.pyboot.shell.agent: (eclipse-plugin)
      (d) org.cohorte.herald:org.cohorte.herald.api:0.0.2-SNAPSHOT
   [m] :org.psem2m.isolates.base: (eclipse-plugin)
      (d) org.cohorte.utilities:org.cohorte.utilities:1.0.0-SNAPSHOT
   [m] :org.psem2m.isolates.constants: (eclipse-plugin)
   [m] :org.cohorte.composer.api:3.0.0-SNAPSHOT (eclipse-plugin)
   [m] :org.cohorte.composer.isolate:3.0.0-SNAPSHOT (eclipse-plugin) 
      (d) org.cohorte.remote:org.cohorte.remote.api:1.2.0-SNAPSHOT
   [m] :org.cohorte.shell.osgi: (eclipse-plugin)
   [m] :org.cohorte.shell.remote: (eclipse-plugin)
      (d) org.cohorte.utilities:org.cohorte.utilities:1.0.0-SNAPSHOT
   [m] :org.psem2m.isolates.loggers: (eclipse-plugin)
      (d) org.cohorte.utilities:org.cohorte.utilities:1.0.0-SNAPSHOT
   [m] :org.psem2m.isolates.slave.agent: (eclipse-plugin)
      (d) org.cohorte.herald:org.cohorte.herald.api:0.0.2-SNAPSHOT
      (d) org.cohorte.utilities:org.cohorte.utilities:1.0.0-SNAPSHOT
   [m] :org.psem2m.status.storage: (eclipse-plugin)
      (d) org.cohorte.utilities:org.cohorte.utilities:1.0.0-SNAPSHOT
   [m] :org.psem2m.isolates.ui: (eclipse-plugin)
      (d) org.cohorte.herald:org.cohorte.herald.api:0.0.2-SNAPSHOT
      (d) org.cohorte.utilities:org.cohorte.utilities:1.0.0-SNAPSHOT
   [m] :org.psem2m.isolates.ui.admin: (eclipse-plugin)
      (d) org.cohorte.utilities:org.cohorte.utilities:1.0.0-SNAPSHOT

[p] cohorte:1.0.0.dev
   (d) iPOPO>=0.5.7
   (d) Cohorte-Herald>=0.0.2.dev

[m] org.cohorte.platforms:home:1.0.0-SNAPSHOT
   (d) org.cohorte.runtime:cohorte-java:1.0.0-SNAPSHOT
   (d) cohorte:1.0.0.dev

3RDPARTY
========

jpype
pelix
jsonrpclib-pelix

{% endhighlight %}

## Previous Releases

TODO