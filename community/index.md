---
layout: page
title: Community
---

Cube Project has several sub-projects hosted on Github at this address: [https://github.com/isandlatech/](https://github.com/isandlatech/)

## Build Tools

To build the code, install (as well as the programs needed to build Cube on Windows, if that is your development platform)

 * Apache Maven
 * Oracle Java 6 or 7 or OpenJDK

   These should also be on your PATH; test by executing `mvn` and `javac` respectively.

## Getting the source code
The official location for Cube source code is GitHub. You need a git client installed on your system. Some IDEs ship with Git support; this document assumes you are using the command line.

> git clone https://github.com/isandlaTech/cohorte-platforms

## Build the sources

You will need to perform your initial builds online so that Maven can download dependencies.

Depending on your working platform, you need to specify a pre-defined maven profile adequate to your platform. Here is the supported platforms: 

<table class="table">
<tr><td><b>Profile</b></td><td><b>Description</b></td></tr>
<tr><td>python</td><td>Compile and generate a COHORET platform distribution with full Python support. This distribution can be used in devices with no JVM installed and where all components are implemented in Python.</td></tr>
<tr><td>linux</td><td>Compile and generate a COHORET platform distribution for 64 bits linux operating system.This distribution can manage Python and Java components. </td></tr>
<tr><td>macosx</td><td>Compile and generate a COHORET platform distribution for 64 bits Mac OS X operating system.This distribution can manage Python and Java components. </td></tr>
</table>

Example of compilation in the Mac OS X operating system.

 * `mvn clean install -P macosx`


## Continuous Integration

[Learn more about our build process](./ci.html).

## Bug fixing

You can write an “issue” directly in the sub-project’s “issues” tab of GitHub website. Mostly, you can contribute instructions on how to fix a given bug. Or you can directly fix it and send it as a “pull request” on github. 

## Future development and enhancement 
Once you get comfortable with the code, you can start to scratch your own itch and contribute new features. 

