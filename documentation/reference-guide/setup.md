---
layout: page
title: Reference Guide | Setup
---

[Home](../../) > [Documentation](../) > [Reference Guide](../reference-guide.html)

<hr/>

## Download and install COHORTE distribution

There are three ways of installing COHORTE on your system:

#### 1) Using Installer

No prerequisites are needed. The installer will install all the needed artifacts of COHORTE distribution including the Java Virutal Machine (JVM) and Python interpreter.

Go to the [donwloads page](../../downloads) and choose your platform dependent installer to download and use. 

##### Windows Installer

TODO (exe/msi)

##### Mac OS X Installer

TODO (pkg)

##### Linux Installer

TODO (deb/pkg)

#### 2) Using Python tools 

If you have Python installed on your machine, you can download and install COHORTE with a simple command line. Depending on your operating system, you can use the following commands:

 * `pip install cohorte-macos` for Mac OS X platform.
 * `pip install cohorte-linux` for Linux-based platforms.
 * `pip install cohorte-windows` for Windows platforms.

These assume that you have `pip` tools installed on your machine. 


#### 1) Manual installation

Depending on your operating system, we give some insights about how install COHORTE distribution using specific platform instructions.

##### Unix-based Operating Systems (Linux, Solaris and Max OS X)

1. Donwload the COHORTE distribution adequate to your operating system from [repo.isandatech.com/cohorte](http://repo.isandatech.com/cohorte). For Max OS X you download `cohorte-1.0.0-macosx.tar.gz`.
2. Extract the distribution archive, i.e. `cohorte-1.0.0-macosx.tar.gz` to the directory you wish to install COHORTE. These instructions assume you chose `/Applications/Cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
3. Add the `COHORTE_HOME` environment variable. E.g., `export COHORTE_HOME=/Applications/Cohorte/cohorte-1.0.0/home`.

##### Windows

1. Donwload the COHORTE distribution adequate to your operating system from [repo.isandatech.com/cohorte](http://repo.isandatech.com/cohorte). For Windows platform, download `cohorte-1.0.0-windows.zip`.
2. Unzip the distribution archive to the directory you wish to install COHORTE. These instructions assume you chose `C:\Program Files\Cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
3. Add the `COHORTE_HOME` environment variable by opening up the system properties (WinKey + Pause), selecting the "Advanced" tab, and the "Environment Variables" button, then adding the `COHORTE_HOME` variable in the user variables with the value `C:\Program Files\Cohorte\cohorte-1.0.0\home`. Be sure to omit any quotation marks around the path even if it contains spaces. 

## What is included?

COHORTE distribution contains two main folders:
 
 * `home`: the main distribution runtime files.
 * `base`: base distribution used to launch user-specific applications (including his developed and provided components)

 The `home` folder is the main distribution's directory, it contains all the needed libraries and binaris to run the COHORTE system. In particular, it has the following content:
 
 * `conf`
 * `repo`
 * ...


<hr/>
[Home](../) > [Documentation](./) > [Reference Guide](../reference-guide.html)