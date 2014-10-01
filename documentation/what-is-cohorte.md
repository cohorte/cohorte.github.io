---
layout: page
title: What is COHORTE?
---

[Home](../) > [Documentation](./)

## Solution Overview

COHORTE is a platform for developing and rolling out robust and reliable software.
Software produced with COHORTE has a high level of robustness and reliability since its is made up of a range of components and services protected from one another by isolation containers. This modular architecture guarantees that software cannot be paralyzed in the event of failure of one of its components and that, for example, 100% of the data communicated is processed.

This modular architecture ensures automatic service recovery after errors and to supply degraded responses in the event of unavailability of a component.
The platform incorporates a range of tried and tested basic components dramatically reducing specific developments, thereby reducing the cost of projects using them.
The level of reliability of software produced with COHORTE SDK also reduces operating and maintenance costs for the companies software packages.

## Goals and Benefits

There are a number of benefits to using COHORTE to build your software applications. The most evident ones are:

 * *Dynamic Component-based Applications*: COHORTE provides a framework to construct modularised applications consisting of software components that uses software services provided by other components. This service-based approach allows the dynamic update of the application by adding new components implementing an existing service.
 * *Distributed Instantiation*: Component-based software applications developed with COHORTE are automatically instantiated and their components are automatically wired following a declarative description (in JSON). Components can be instantiated in different distributed nodes and they are connected using a service-based approach. Service invocation from a developer perspective is the same whereas the service provider is located on the local or on the remote machine.
 * *Dynamic Isolation and resilience*: isolating components into sandboxes is a best practice solution to reduce the impact of the crash of parts of an application and hence to ensure the survivability of long-lived software applications. COHORTE guarantees the resilience of such applications by using dynamically calculated isolates (regions) where each one contains a set of components with some degree of resilience rate. 
 * *Interoperability*: Software components developed with COHORTE can be built using different programming languages (Java and Python). Furthermore, they can be deployed and instantiated in different sort of machines from small devices (e.g., Raspberry) to powerful servers.

If you haven't yet, try it out! [Here are some resources to get
started](./).

