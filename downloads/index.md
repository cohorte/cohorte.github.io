---
layout: page
title: Downloads
toc: false

comments: false
---


<!--

## Pre-Release Versions (1.1.0.pre2)

* Mac OS X (64bits): [cohorte-1.1.0-pre2-macosx-distribution.tar.gz](http://repo.isandlatech.com/maven/snapshots/org/cohorte/platforms/cohorte/1.1.0-SNAPSHOT/cohorte-1.1.0-20150701.162207-41-macosx-distribution.tar.gz)
* Linux (x86_64) : [cohorte-1.1.0-pre2-linux-distribution.tar.gz](http://repo.isandlatech.com/maven/snapshots/org/cohorte/platforms/cohorte/1.1.0-SNAPSHOT/cohorte-1.1.0-20150701.161913-40-linux-distribution.tar.gz) 
* Full Python : [cohorte-1.1.0-pre2-python-distribution.tar.gz](http://repo.isandlatech.com/maven/snapshots/org/cohorte/platforms/cohorte/1.1.0-SNAPSHOT/cohorte-1.1.0-20150701.161658-39-python-distribution.tar.gz) 

* [Changelog](http://repo.isandlatech.com/maven/snapshots/org/cohorte/platforms/cohorte/1.1.0-SNAPSHOT/cohorte-1.1.0-20150701.162431-42-changelog.txt)
* [Source code](https://github.com/isandlaTech/cohorte-platforms/releases/tag/1.1.0-pre2)

-->

## Stable Releases (1.2.1) 
Released on 07/07/2017

<div class="menu-choices">
    <a style="left: -10%;" class="menu-choice menu-choice-python"
      href="https://nrm.cohorte.tech/repository/cohorte-releases/org/cohorte/platforms/cohorte/1.2.1/cohorte-1.2.1-python-distribution.tar.gz" data-toggle="tooltip" data-placement="bottom" title="Cohorte Distribution for full Python distributed component-based applications. It can be used in any operating system having Python 2.7+ or 3.2+ installed.">Python (2.7+ 3.2+)</a>
    <a style="left: 19%;" class="menu-choice menu-choice-java"
      href="https://nrm.cohorte.tech/repository/cohorte-releases/org/cohorte/platforms/cohorte/1.2.1/cohorte-1.2.1-full-distribution.tar.gz" data-toggle="tooltip" data-placement="bottom" title="Cohorte Distribution for Java and Python distributed component-based applications. It requires Java JRE 1.7+ and Python 3.4+ (64 bits)">Java & Python</a>           
</div>

<div id="download_releases">
</div>

[CHANGELOG file of this release version](https://nrm.cohorte.tech/repository/cohorte-releases/org/cohorte/platforms/cohorte/1.2.1/cohorte-1.2.1-changelog.txt).

You found detailed installation instructions on [this page of the reference guide](../docs/1.1/setup).



<!-- 
## Nightly Builds

<div id="download_night_builds">
</div>

-->

<!--

## Tutorials Resources

<ul>
  <li>Getting started tutorial (<a href="{{site.baseurl}}/docs/1.1/tutorials/getting-started">read this tutorial here</a>) : <br/>
      <ul><li><a id="download_hello_demo_python_snapshot" href="#">Download Hello Python Bundle</a></li>
          <li><a id="download_hello_demo_java_snapshot" href="#">Download Hello Java Bundle</a></li></ul>
  </li>
  <li>Robots tutorial (<a href="{{site.baseurl}}/docs/1.1/tutorials/robots">read this tutorial here</a>) : <br/>
      <ul><li><a id="download_robots_snapshot" href="#">Download Robots Nodes</a></li>
      </ul>
  </li>
  <li>Temper tutorial (<a href="{{site.baseurl}}/docs/1.1/tutorials/temper">read this tutorial here</a>) : <br/>
      <ul><li><a id="download_temper_snapshot" href="#">Download Temper Nodes</a></li>
          <li>Download Temper Unity Viewer - <a href="#">Mac OSX</a> | <a href="#">Linux</a> | <a href="#">Windows</a></li></ul>
  </li>
  <li>Spellchecker tutorial sources (<a href="{{site.baseurl}}/docs/1.1/tutorials/spellchecker">read this tutorial here</a>) : <br/>
      <ul><li><a id="download_spellchecker_snapshot" href="#">Download Spellchecker sources</a></li>
      </ul>
  </li>
</ul>

-->

<script>
    function update_night_build_links() {
        $.getJSON( "http://cohorte.github.io/latests/distributions_dev.json", function( data1 ) {
            console.log("refresh snapshots...");
            frame = "<a href='"+data1["cohorte-python-distribution"]["changelog"]+"'>CHANGELOG</a><br/>"
            frame += "<ul>";
            frame += "<li><a href='" + data1["cohorte-linux-distribution"]["files"]["tar.gz"] + "'>cohorte-linux-distribution (" + data1["cohorte-linux-distribution"]["version"] +"-"+data1["cohorte-linux-distribution"]["timestamp"] + ")</a></li>"
            frame += "<li><a href='" + data1["cohorte-macosx-distribution"]["files"]["tar.gz"] + "'>cohorte-macosx-distribution (" + data1["cohorte-macosx-distribution"]["version"] +"-"+data1["cohorte-macosx-distribution"]["timestamp"] + ")</a></li>"
            frame += "<li><a href='" + data1["cohorte-python-distribution"]["files"]["tar.gz"] + "'>cohorte-python-distribution (" + data1["cohorte-python-distribution"]["version"] +"-"+data1["cohorte-python-distribution"]["timestamp"] + ")</a></li>"
            frame += "<li><a href='" + data1["cohorte-windows-distribution"]["files"]["tar.gz"] + "'>cohorte-windows-distribution (" + data1["cohorte-windows-distribution"]["version"] +"-"+data1["cohorte-windows-distribution"]["timestamp"] + ")</a></li>"
            	
	          frame += "</ul>";
            $('#download_night_builds').html(frame);
        });
        
    }

    function update_getting_started_tutorial_links() {
        $.getJSON( "http://cohorte.github.io/latest_demos_hello.json", function( data2 ) {                                 
            $("#download_hello_demo_python_snapshot").attr("href", data2["snapshots"]["hello-python-distribution"]["files"]["zip"]);
            $("#download_hello_demo_java_snapshot").attr("href", data2["snapshots"]["hello"]["files"]["jar"]);
        });
    }

    function update_robots_tutorial_links() {
        $.getJSON( "http://cohorte.github.io/latest_demos_robots.json", function( data3 ) {
            $("#download_robots_snapshot").attr("href", data3["snapshots"]["robots-distribution"]["files"]["zip"]) ;        
        });
    }

    function update_temper_tutorial_links() {
        $.getJSON( "http://cohorte.github.io/latest_demos_temper.json", function( data3 ) {
            $("#download_temper_snapshot").attr("href", data3["snapshots"]["temper-distribution"]["files"]["zip"]) ;        
        });
    }

    function update_spellchecker_tutorial_links() {
        $.getJSON( "http://cohorte.github.io/latest_demos_spellchecker.json", function( data4 ) {                                 
            $("#download_spellchecker_snapshot").attr("href", data4["snapshots"]["spellchecker-distribution"]["files"]["zip"]);            
        });
    }


    $(document).ready(function() {        
        update_night_build_links();
        update_getting_started_tutorial_links();
        update_temper_tutorial_links();
        update_spellchecker_tutorial_links();
    });
</script>
