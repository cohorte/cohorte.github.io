---
layout: page
title: Key Concepts
---

[Home](../) > [Documentation](./)

## Key Concepts of Cohorte 

#### Component

TODO

#### Isolate

An Isolate is a system process executing and managing a set of Components.

#### Node

Represents a physical device or a virtual machine where a set of Isolates executes.

#### Cohorte Agent

At each Node, a COHORTE Agent is a special Isolate containing a set of COHORTE Runtime Components used to manage the different other Isolates of the local Node.

#### Component Factory

An object that allows the instantiation of components (instances) of the same type.

#### Composite

A Composite is a logical representation of a hierarchical node in a composition graph. It contains a set of components and other composites and it can define configuration properties that will override the ones used in their children components and composites.

#### Application

A logical, abstract description of the set of components/composites and the possible wires between them.

#### Composer

The Composer is a special COHORTE Runtime Component responsible of instantiating the different components of an application. In COHORTE there are different Composer levels:
 * *Top Composer*: It loads the composition declarative description and computes the sets of components according to the node they must be instantiated on.
 * *Node Composer*: It calculates the different isolates that must be exist for the local set of components.
 * *Isolate Composer*: It uses framework-specific agents to request the instantiation of the components assigned to its isolate, and looks after their evolution.

#### Cohorte System

A set of Cohorte Agent for the same Application.

