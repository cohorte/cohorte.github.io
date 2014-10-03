---
layout: page
title: Getting Started Java
comments: false
---

[Home](../) > [Documentation](./) > [Getting Started](./getting-started.html)

## COHORTE for Java

Welcome to COHORTE for Java! With COHORTE, you can build modular and resilient applications using the Java programming language, and take advantage of the many benefits of the COHORTE approach (see [what is COHORTE?](./what-is-cohorte.html)).

In this tutorial, we will implement the awesome **spellchecker** application detailed in the [getting started](./getting-started.html) page.

![SpellChecker Application]({{ site.baseurl }}/resources/images/getting-started/getting-started-img3.png)

### Setup

The first thing we need to do is to set up the development environment. We will be using [Apache Maven](http://maven.apache.org), although you can use whatever build tool you feel confortable using. If you wish to use something else to build this tutorial (such as Ant), you will need to manually account for all the needed dependencies. In [Developer's Guide](./dev-guide.html) page, we detail different possible development environments setup.

In the next section, we will use COHORTE maven tools to generate and compile COHORTE components. You need to install Maven and configure it to use our provided tools. Read more about using Maven in the official website [http://maven.apache.org/](http://maven.apache.org/).

Add the two blocks of code to the file `settings.xml` (usually in your Maven `conf` of `$HOME/.m2` directory, create it if not present)

This will have Maven allow you to execute COHORTE plugins:

{% highlight xml %}
<settings>
	<pluginGroups>
		<pluginGroup>org.cohorte.plugins</pluginGroup>
	</pluginGroups>
	...
</settings>
{% endhighlight %}

This will tell your Maven instance where to find the COHORTE repositories:

{% highlight xml %}
<profile>
    <id>Cohorte Org</id>
    <activation>
        <activeByDefault>true</activeByDefault>
    </activation>
    <repositories>
        <repository>
            <id>cohorte-releases</id>
            <name>Cohorte Repository</name>
            <url>http://repo.isandlatech.com/maven/releases/</url>
            <layout>default</layout>
        </repository>
        <repository>
            <id>cohorte-snapshots</id>
            <name>Cohorte Snapshot Repository</name>
            <url>http://repo.isandlatech.com/maven/snapshots/</url>
            <layout>default</layout>
        </repository>
    </repositories>
</profile>z
{% endhighlight %}

### Creating COHORTE project template

To create a project, simply type the following command. If this is your first time running this command, Maven downloads the archetype for you.

{% highlight sh %}
mvn archetype:generate \
-DarchetypeGroupId=org.cohorte \
-DarchetypeArtifactId=cohorte-java-archetype \
-DarchetypeVersion=1.0.0 \
-DgroupId=org.cohorte.demos \
-DartifactId=spellchecker \
{% endhighlight %}

This command will generate a project template for a COHORTE project **spellchecker** which has the following structure:

 * `pom.xml`: an XML file that contains information about the project and configuration details used by Maven to build the project. 
 * `src/main/java/`: this folder contains the java source files of your bundle
 * `src/test/java/`: this folder contains the test classes of your bundle.
    
> Any maven project is identified by it groupId, artifactId, and version number. You find this information in the `pom.xml`file. Any dependencies to other libraries should be declared also in the `pom.xml`file. Maven retrieve them automatically when compiling the project.


[Home](../) > [Documentation](./) > [Getting Started](./getting-started.html)