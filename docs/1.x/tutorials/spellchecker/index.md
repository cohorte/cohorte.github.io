---
layout: docpage
title: Spellchecker Tutorial
comments: true
parent: documentation
parent_url: ../../
previous_page: ../temper
next_page: ../arduino-led
---

This tutorial provides step-by-step introduction to COHORTE, starting with a simple application using Python or Java programming language. All the resulting code can be donwload using the following link, however we encourage you to follow the different steps of this tutorial to build your own fresh COHORTE application.

<p>
<a id="download_spellchecker_snapshot" href="#" class="btn btn-success">Download Robots Nodes</a>
</p>

The goal of this first tutorial is to highlight the Service-oriented Component-based approach to construct modular and dynamic software applications. 

To get started, choose first your preferend programming language:

<div class="menu-choices">	
    <a style="left: 0%;" class="menu-choice menu-choice-python"
      href="./python.html">Python</a>
	<a style="left: 30%;" class="menu-choice menu-choice-java"
      href="./java.html">Java</a>
</div>

<div class="note">
<span class="note-title">Note</span>
<p class="note-content">
You can have a COHORTE application made of a mixture of Java and Python components!
</p>
</div>



<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_demos_spellchecker.json", function( data ) {            
            $("#download_spellchecker_snapshot").attr("href", data["snapshots"]["spellchecker-distribution"]["files"]["zip"])                     
        });
    }
    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>