---
layout: docpage
title: Download and install COHORTE distribution
parent: Documentation
toc: true
toc_numerate: true
toc_exlude: h1, h4, h5, h6
previous_page: ../key-concepts
next_page: ../getting-started
---

There are several ways of installing COHORTE on your system. In the following, we detail the manual installation on different platforms.

## Which Cohorte Distribution version should download and Install?

Depending on your application needs and the target deployment platform, you have the choice between:

<table class="table">

<tr><td><img src="{{ site.baseurl }}/resources/images/python-color.png"/></td>
<td>  
<b>Python Distribution</b> 
<br/><p>This distribution (runtime) is intended for pur Python applications based on iPOPO service-component model.
It works on mainly all operating systems having Python interpreter version > 2.7+.</p>
</td></tr>
<tr><td><img src="{{ site.baseurl }}/resources/images/java-color.png"/></td>
<td>   
<b>Python + Java Distribution</b>
<br/><p>This distribution (runtime) is intended for applications composed of Java (Apache Felix iPOJO) and/or 
Python (Pelix iPOPO) service-oriented components (or only one of the two). As requirement, you need Python 3.4+ and JRE 1.7+. Notice that when you develop a full Java application, Python is required as the principal Cohorte runtime logic is implemented in Python.
</p><p>"Python + Java Distribution" is platform dependent (Some internal Cohorte's Python components are platform dependent). You should install the adequate distribution for your operating system in this case. The Python Distribution is platform independent.
</p> 
</td></tr>   
</table>

All the distribution files are listed on the <a href="{{ site.baseurl }}/downloads">download page</a>.

## Installation procedures

### Unix-based Operating Systems (Linux, Solaris and Max OS X)

2. Extract the distribution archive, i.e. `cohorte-1.0.0-linux-distribution.tar.gz` to the directory you wish to install COHORTE. These instructions assume you chose `/opt/isandlatech/cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
3. Go to the `cohorte-1.0.0` directory and launch `setup.sh` command. This will export `COHORTE_HOME` environment variable (and add it to your home directory's `.bashrc` file).
4. Ensure to have the access rights to `$COHORTE_HOME` directory (e.g., `sudo chgrp -R your_login cohorte-1.0.0; chown -R your_login cohorte-1.0.0).

### Windows

1. Prior to install Cohorte, you should have [Python 3.4](http://www.python.org) installed on your machine. You have also to install [Pywin32](http://sourceforge.net/projects/pywin32/) adequat to your operating system.
2. Set `PYTHON_HOME` environment variable to target your installed Python distribution. 
3. Set `PYTHON_INTERPRETER=%PYTHON_HOME%\python.exe` environment variable to target your python interpreter executable.
4. Unzip the distribution archive to the directory you wish to install COHORTE. These instructions assume you chose `C:\Program Files\Cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
5. Add the `COHORTE_HOME` environment variable by opening up the system properties (WinKey + Pause), selecting the "Advanced" tab, and the "Environment Variables" button, then adding the `COHORTE_HOME` variable in the user variables with the value `C:\Program Files\Cohorte\cohorte-1.0.0\home`. Be sure to omit any quotation marks around the path even if it contains spaces. 
6. Add `%COHORTE_HOME%\bin` to the system's `PATH` environment variable.

### Raspberry-Pi


### Arduino-Yun


### IBM Bluemix (Cloud Foundry)
