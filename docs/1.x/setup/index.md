---
layout: docpage
title: Download and install COHORTE distribution
parent: Documentation
toc: true
toc_numerate: true
toc_exlude: h1, h4, h5, h6
previous_page: ../tutorials
next_page: ../components
---

There are several ways of installing COHORTE on your system. In the following, we detail the manual installation (as the installers are not yet available).

## Manual installation

Depending on your operating system, we give some insights about how install COHORTE distribution using specific platform instructions.

* Donwload the COHORTE distribution adequate to your operating system from the [downloads page]({{ site.baseurl }}/downloads). E.g., for Linux OS you download `cohorte-1.0.0-linux-distribution.tar.gz`.

### Unix-based Operating Systems (Linux, Solaris and Max OS X)

2. Extract the distribution archive, i.e. `cohorte-1.0.0-linux-distribution.tar.gz` to the directory you wish to install COHORTE. These instructions assume you chose `/opt/isandlatech/cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
3. Go to the `cohorte-1.0.0` directory and launch `setup.sh` command. This will export `COHORTE_HOME` environment variable (and add it to your home directory's `.bashrc` file).
4. Ensure to have the access rights to `$COHORTE_HOME` directory (e.g., `sudo chgrp -R your_login cohorte-1.0.0; chown -R your_login cohorte-1.0.0).

### Windows

2. Unzip the distribution archive to the directory you wish to install COHORTE. These instructions assume you chose `C:\Program Files\Cohorte`. The subdirectory `cohorte-1.0.0` will be created from the archive.
3. Add the `COHORTE_HOME` environment variable by opening up the system properties (WinKey + Pause), selecting the "Advanced" tab, and the "Environment Variables" button, then adding the `COHORTE_HOME` variable in the user variables with the value `C:\Program Files\Cohorte\cohorte-1.0.0\home`. Be sure to omit any quotation marks around the path even if it contains spaces. 


## Using Installers

Work in progress...