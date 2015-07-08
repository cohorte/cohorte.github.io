---
layout: docpage
title: Robots Tutorial
comments: true
toc: true
toc_exclude: h1, h4, h5, h6
toc_numerate: true
parent: documentation
parent_url: ../../
previous_page: ../hello
next_page: ../temper
---

The objective of this demonstration is to show you how using Cohorte in your project decrease the time-to-market intervals by focusing on business logic to implement, not distributed systems problems.

We demonstrate this quality in a simple simulated robotic project.

## Introduction

The following slides introduces the demo. We give more details in next sections.

<iframe src="https://docs.google.com/presentation/d/1F25fyJcq4KMXPB3LmJkEdxqtgnRXJSscUkCW9ZhkE4M/embed?start=false&loop=false&delayms=3000" frameborder="0" width="660" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Have a look to [this slides]({{site.baseurl}}/docs/1.x/slides/overview) to understand the COHORE Project objectives.

## Application

The purpose of this demo is to develop a simple robotics application where one or more robots move to a predefined target set by a controller. 

![application](robots-img-1.png)

<a id="download_robots_snapshot" href="#" class="btn btn-success">Download Robots Nodes</a>

<div class="note">
<span class="note-title">Note</span>
<p class="note-content">This chapter is not yet completely written.</p>
</div>


<< VIDEO >>

<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_demos_robots.json", function( data ) {                                              
            $("#download_robots_snapshot").attr("href", data["snapshots"]["robots-distribution"]["files"]["zip"])         
        });
    }
    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>
