---
layout: page
title: Community
---

Cube Project has several sub-projects hosted on Github at this address: https://github.com/isandlatech/

## Build Tools

To build the code, install (as well as the programs needed to build Cube on Windows, if that is your development platform)
 * Apache Maven
 * Oracle Java 6 or 7 or OpenJDK
   These should also be on your PATH; test by executing mvn and javac respectively.

## Getting the source code
The official location for Cube source code is GitHub. You need a git client installed on your system. Some IDEs ship with Git support; this document assumes you are using the command line.

> git clone https://github.com/isandlatech/cohorte-runtime.git 

> git clone https://github.com/isandlatech/cohorte-platform.git 

Git works offline - though you will need to perform your initial builds online so that Maven can download dependencies.

## Build the sources

### Java code

TODO: should use `dev` branch (except for cohorte-utilities).

You need to run the Maven build command on each subproject seperatly. 

1. clone and compile `cohorte-org.jabsorb.ng`
   * `git clone git@github.com:isandlaTech/cohorte-org.jabsorb.ng.git`
   * `cd cohorte-org.jabsorb.ng`
   * `mvn clean install`

2. clone and compile `cohorte-remote-services`
   * `git clone git@github.com:isandlaTech/cohorte-remote-services.git`
   * `cd cohorte-org.jabsorb.ng`
   * `mvn clean install`

3. clone and compile `cohorte-herald`
   * `git clone git@github.com:isandlaTech/cohorte-herald.git`
   * cd cohorte-herald/java
   * `mvn clean install`

4. clone and compile `cohorte-utilities`
   * `git clone git@github.com:isandlaTech/cohorte-utilities.git`
   * cd cohorte-utilities
   * `mvn clean install`

5. clone and compile `cohorte-runtime`
   * `git clone git@github.com:isandlaTech/cohorte-runtime.git`
   * cd cohorte-runtime/java
   * `mvn clean install`

### Python code

TODO

## Bug fixing

You can write an “issue” directly in the sub-project’s “issues” tab of GitHub website. Mostly, you can contribute instructions on how to fix a given bug. Or you can directly fix it and send it as a “pull request” on github. 

## Future development and enhancement 
Once you get comfortable with the code, you can start to scratch you own itch and contribute new features. 

