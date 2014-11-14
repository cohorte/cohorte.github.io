---
layout: page
title: Downloads
comments: false
---



You found detailed installation instructions on [this page of the reference guide](../docs/1.x/setup).

## Stable Releases

* Mac OS X : 
* Linux : 
* Windows :

<div id="download_releases">
</div>

## Pre-Release Versions (1.0.0.pre1)

* Mac OS X : [cohorte-1.0.0.pre1-macosx-distribution.tar.gz](http://forge.isandlatech.com/cohorte/downloads/1.x/cohorte-1.0.0.pre1-macosx-distribution.tar.gz)
* Linux : [cohorte-1.0.0.pre1-linux-distribution.tar.gz](http://forge.isandlatech.com/cohorte/downloads/1.x/cohorte-1.0.0.pre1-linux-distribution.tar.gz)

## Night Builds

<div id="download_night_builds">
</div>


<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_platforms.json", function( data ) {
            console.log("refresh snapshots...");
            frame = "<ul>";
            frame += "<li><a href='" + data["snapshots"]["cohorte-linux-distribution"]["files"]["tar.gz"] + "'>cohorte-linux-distribution (" + data["snapshots"]["cohorte-linux-distribution"]["version"] + ")</a></li>"
            frame += "<li><a href='" + data["snapshots"]["cohorte-macosx-distribution"]["files"]["tar.gz"] + "'>cohorte-macosx-distribution (" + data["snapshots"]["cohorte-macosx-distribution"]["version"] + ")</a></li>"
            frame += "<li><a href='" + data["snapshots"]["cohorte-python-distribution"]["files"]["tar.gz"] + "'>cohorte-python-distribution (" + data["snapshots"]["cohorte-python-distribution"]["version"] + ")</a></li>"
            	
	    frame += "</ul>";
            $('#download_night_builds').html(frame);
        });
    }

    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>
