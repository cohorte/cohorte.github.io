---
layout: page
title: Spellchecker tutorial
comments: false
previous_page: ../getting-started
next_page: ../temper
---

[Home](../../../../) > [Documentation](../../) > [Tutorials](../)

## Spellchecker tutorial

This tutorial provides step-by-step introduction to COHORTE, starting with a simple application using Python or Java programming language. All the resulting code can be donwload using the following link, however we encourage you to follow the different steps of this tutorial to build your own fresh COHORTE application.

<p>
<div id="download_spellchecker_snapshot"></div> 
</p>

The goal of this first tutorial is to highlight the Service-oriented Component-based approach to construct modular and dynamic software applications. Other features of COHORTE <a href="../../what-is-cohorte">listed here</a>, are explored and explained in <a href="../">other tutorials</a>.

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


[Home](../../../../) > [Documentation](../../) > [Tutorials](../)


<script>
    function loadLatestSnapshots() {
        $.getJSON( "http://cohorte.github.io/latest_demos_spellchecker.json", function( data ) {            
            frame1 = "<a class='btn' href='" + data["snapshots"]["spellchecker-distribution"]["files"]["zip"] + "'>spellchecker.zip</a>"                  
            $('#download_spellchecker_snapshot').html(frame1);            
        });
    }
    $(document).ready(function() {        
        loadLatestSnapshots();
    });
</script>