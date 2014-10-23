---
layout: page
title: Reference Guide | Setup
previous_page: ../tutorials
next_page: ../components
---

[Home](../../../) > [Documentation](../)

## Download and install COHORTE distribution

There are several ways of installing COHORTE on your system. In the following, we detail the manual installation (as the installers are not yet available).

#### 1) Manual installation

Depending on your operating system, we give some insights about how install COHORTE distribution using specific platform instructions.

##### Unix-based Operating Systems (Linux, Solaris and Max OS X)

1. Donwload the COHORTE distribution adequate to your operating system from [the downloads page]({{ site.baseurl }}/downloads). E.g., for Linux OS you download `cohorte-1.0.0-linux-distribution.tar.gz`.
2. Extract the distribution archive, i.e. `cohorte-1.0.0-linux-distribution.tar.gz` to the directory you wish to install COHORTE. These instructions assume you chose `/usr/local/cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
3. Add the `COHORTE_HOME` environment variable. E.g., `export COHORTE_HOME=/Applications/Cohorte/cohorte-1.0.0/home` (add this line to .bashrc file).

##### Windows

1. Donwload the COHORTE distribution adequate to your operating system from [repo.isandatech.com/cohorte](http://repo.isandatech.com/cohorte). For Windows platform, download `cohorte-1.0.0-windows.zip`.
2. Unzip the distribution archive to the directory you wish to install COHORTE. These instructions assume you chose `C:\Program Files\Cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
3. Add the `COHORTE_HOME` environment variable by opening up the system properties (WinKey + Pause), selecting the "Advanced" tab, and the "Environment Variables" button, then adding the `COHORTE_HOME` variable in the user variables with the value `C:\Program Files\Cohorte\cohorte-1.0.0\home`. Be sure to omit any quotation marks around the path even if it contains spaces. 
4. Enter the `cohorte-1.0.0` directory and launch `setup.sh` command. This will export `COHORTE_HOME` environment variable via `.bashrc` file.
5. Cloce the actual terminal and open a new one to continu using COHORTE.





[Home](../../../) > [Documentation](../)
