---
layout: page
title: Reference Guide
previous_page: ../components
next_page: ../startup
---

[Home](../../../) > [Documentation](../)

## COHORTE Applications

### Introduction 

A COHORTE application is composed of a set of components requiring and providing services. These components can be located in one node or dispatched between a set of nodes.

In a classical component-based frameworks, components are instantiated statically at a pre-defined locations. They are also configured to communicate together before launching the application. This led to a situation in wich a lot of configuration files should be managed (or even to recompile the components if the communication aspects are hard coded).

In contrast, COHORTE Components are instantiated, configured and placed in the right node automatically. There is no need to implement the distribution related aspects like serialisation or client/server interaction. Components are seen as blackboxes wired by *declared* (remote) services. 

To implement COHORTE *managed* components, COHORTE supports two main, already existing component-based frameworks (see [previous chapter](../components)): 

 * Apache Felix iPOJO (Java)
 * Pelix/iPOPO (Python)

If you are already familiar with one of the two frameworks, all whats you have to do in order to get your components managed by COHORTE is to not instantiate them (using `@Instantiate` annotation or its XML equivalent). COHORTE will instantiate them automatically. To have benefits of Remote Services feature, your services should use primitive types instead of complex user-specific types. Next, you need to write a small description of your application components using the format explained hereafter. 

### COHORTE Application Description Specification




[Home](../../../) > [Documentation](../)