---
layout: page
title: Downloads
comments: true
---

## Stable Releases

<div id="download_releases">
</div>

For important changes, please consult the [release notes](#).

You found detailed installation instructions on [this page of the reference guide](../docs/1.x/setup).

## Night Builds

<div id="download_night_builds">
</div>

## Additional information


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
