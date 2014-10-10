---
layout: page
title: Downloads
comments: true
---

## Stable Releases

<div id="download_releases">
</div>

For important changes, please consult the [release notes](#).

You found detailed installation instructions on [this page of the reference guide](../documentation/reference-guide/setup.html).

## Night Builds

<div id="download_night_builds">
</div>

## Additional information


<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_platforms.json", function( data ) {
            console.log("refresh snapshots...");
            frame = "<ul>";
            frame += "<li><a href='" + data["snapshots"]["cohorte-linux-distribution"]["files"]["zip"] + "'>cohorte-linux-distribution (" + data["snapshots"]["cohorte-linux-distribution"]["version"] + ")</a></li>"
            	
	    frame += "</ul>";
            $('#download_night_builds').html(frame);
        });
    }

    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>
