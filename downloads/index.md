---
layout: docpage
title: Downloads
toc: true

comments: false
---



You found detailed installation instructions on [this page of the reference guide](../docs/1.x/setup).

## Stable Releases

Not yet released!

<div id="download_releases">
</div>

## Pre-Release Versions (1.0.0.pre1)

<!--

* Mac OS X : [cohorte-1.0.0.pre1-macosx-distribution.tar.gz](http://repo.isandlatech.com/downloads/cohorte/1.x/cohorte-1.0.0.pre1-macosx-distribution.tar.gz) ( [mirror1](http://dachra.com/mirrors/cohorte/1.x/cohorte-1.0.0.pre1-macosx-distribution.tar.gz) )
* Linux (x86_64) : [cohorte-1.0.0.pre1-linux-distribution.tar.gz](http://repo.isandlatech.com/downloads/cohorte/1.x/cohorte-1.0.0.pre1-linux-distribution.tar.gz) ( [mirror1](http://dachra.com/mirrors/cohorte/1.x/cohorte-1.0.0.pre1-linux-distribution.tar.gz) )
* Full Python : [cohorte-1.0.0.pre1-python-distribution.tar.gz](http://repo.isandlatech.com/downloads/cohorte/1.x/cohorte-1.0.0.pre1-python-distribution.tar.gz) ( [mirror1](http://dachra.com/mirrors/cohorte/1.x/cohorte-1.0.0.pre1-python-distribution.tar.gz) )

-->

## Night Builds

<div id="download_night_builds">
</div>


## Tutorials Resources

<ul>
  <li>Getting started tutorial bundles (<a href="{{site.baseurl}}/docs/1.x/tutorials/getting-started">read this tutorial here</a>) : <br/>
      <ul><li><a id="download_hello_demo_python_snapshot" href="#">Download Hello Python Bundle</a></li>
          <li><a id="download_hello_demo_java_snapshot" href="#">Download Hello Java Bundle</a></li></ul>
  </li>
  <li>Temper tutorial nodes (<a href="{{site.baseurl}}/docs/1.x/tutorials/temper">read this tutorial here</a>) : <br/>
      <ul><li><a id="download_temper_snapshot" href="#">Download Temper Nodes</a></li>
          <li>Download Temper Unity Viewer - <a href="#">Mac OSX</a> | <a href="#">Linux</a> | <a href="#">Windows</a></li></ul>
  </li>
  <li>Spellchecker tutorial sources (<a href="{{site.baseurl}}/docs/1.x/tutorials/spellchecker">read this tutorial here</a>) : <br/>
      <ul><li><a id="download_spellchecker_snapshot" href="#">Download Spellchecker sources</a></li>
      </ul>
  </li>
</ul>

<script>
    function update_night_build_links() {
        $.getJSON( "http://cohorte.github.io/latest_platforms.json", function( data1 ) {
            console.log("refresh snapshots...");
            frame = "<ul>";
            frame += "<li><a href='" + data1["snapshots"]["cohorte-linux-distribution"]["files"]["tar.gz"] + "'>cohorte-linux-distribution (" + data1["snapshots"]["cohorte-linux-distribution"]["version"] + ")</a></li>"
            frame += "<li><a href='" + data1["snapshots"]["cohorte-macosx-distribution"]["files"]["tar.gz"] + "'>cohorte-macosx-distribution (" + data1["snapshots"]["cohorte-macosx-distribution"]["version"] + ")</a></li>"
            frame += "<li><a href='" + data1["snapshots"]["cohorte-python-distribution"]["files"]["tar.gz"] + "'>cohorte-python-distribution (" + data1["snapshots"]["cohorte-python-distribution"]["version"] + ")</a></li>"
            	
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
