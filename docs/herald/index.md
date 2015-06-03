---
layout: docpage
title: Herald Framework
comments: false
toc: true
toc_numerate: true
toc_exlude: h1, h4, h5, h6
---

# Herald Specification v1

## Introduction

Cohorte platform is based on Herald Framework for the discovery and transport between the different isolates. However, Herald is a completely seperate project which could be used for your own cases.
Herald is based on [iPOPO]() python component framework and hence requires [Pelix]() runtime to run. It has also a Java implementation that works on any [OSGi]() platform with [iPOJO]() component model.

This documentation is about `Herald Specification v1`.

This specification is split into this chapters:

* Chapter 1 - Introduction
* Chapter 2 - Terminology
* Chapter 3 - Discovery
* Chapter 4 - Transport
* Chapter 5 - Message Format
* Chapter 6 - Sending Messages
* Chapter 7 - Implementations
* Chapter 8 - Using Herald
* Chapter 9 - Extending Herald


## Terminology

<table class="table table-striped table-bordered table-hover table-condensed">
<thead><tr><th>Term</th><th>Definition</th></tr></thead>
<tbody><tr><td><b>Peer</b></td><td>
...
</td></tr>
<tr><td><b>Group</b></td><td>
...
</td></tr>
<tr><td><b>Access</b></td><td>
...
</td></tr>
<tr><td><b>Message</b></td><td>
..
</td></tr>
<tr><td><b>Discovery</b></td><td>
..
</td></tr>
<tr><td><b>Transport</b></td><td>
..
</td></tr>
<tr><td><b>AppID</b></td><td>
An application ID is associated to each peer: only peers with the same application ID can discover each other.
</td></tr>

</tbody>
</table>


## Discovery

## Transport

## Message Format

Herald Message is a JSON object with the following structure :

{% highlight json %}
{
  "herald-version": 1,       # herald specification version
  
  "headers": {
     "uid": "",              # the unique universal identifier of the message.
     "timestamp" : 0,        # the time the message was created.      
     "sender-uid": "",       # the uuid of the peer which emits the message.
     "send-mode": "",        # the sending mode (fire, post, send)
     "replies-to": "",       # uid of message that triggeed this one (send mode).
  },
  
  "target" : "",             # peer:<uuid> or group:<name>
  "subject" : "",            # the subject of the message. e.g., toto/titi
  "content" : {},            # the message content
   
  "extra" : {}               # transport related infos and future features
}
{% endhighlight %}

**Python Class**

The `Message` class encapsulates Herald JSON message.
The following snipet shows the constructor's code of this class in Python programming language.

`herald/beans.py` 

{% highlight python %}
class Message(object):
    """
    Represents a message to be sent
    """
    def __init__(self, target_id, target_type, subject, content=None,
                 sender_uid=None, send_mode=None, replies_to=None):
        
{% endhighlight %}   

To construct a Herald Message, we should provide these main four parameters :

* target_id
* target_type
* subject
* content

Example : 

{% highlight python %}
msg1 = herald.beans.Message(target="82ab7f36-306d-40fd-bf78-e78365c1f265", 
                            target_type=herald.PEER, 
                            subject="toto/toti", 
                            content="Hello Peer!")

msg2 = herald.beans.Message("forkers", herald.GROUP, "koko/koki")
msg2.set_content("Hello Herald!")    # notice that we can also send a message without content
{% endhighlight %}

Message headers are set by the Message constructor or by the sending service calls. At any way, you should not modify headers manually to not ..

The following snipet provides the list of all possible Message headers. They are defined on `herald` module :

{% highlight python %}
MESSAGE_HEADER_UID = "uid"
"""
Message header containing the message Unique IDentifier.
It is set by the Message constructor. Can not be modified with "set_header" method
"""

MESSAGE_HEADER_TIMESTAMP = "timestamp"
"""
Message header containing the creation date of the message.
It is set by the Message constructor. Can not be modified with "set_header" method
"""

MESSAGE_HEADER_SENDER_UID = "sender-uid"
"""
Message header containing the UID of the sender of the message.
"""

MESSAGE_HEADER_SEND_MODE = "send-mode"
"""
Message header containing the sending mode (fire, post, send)
"""

MESSAGE_HEADER_REPLIES_TO = "replies-to"
"""
Message header containing the UID of the original message that triggered the creation
of the response message containing this header (case of send mode).  
"""
{% endhighlight %} 

Two other headers are added to the message when received by a peer :

{% highlight python %}
MESSAGE_HEADER_ACCESS = "access"
"""  
Message header containing the access on which this message was received 
(only for MessageReceived)
"""

MESSAGE_HEADER_REPLIED = "replied"
"""  
Message header a tag indicating if the message is replied or not 
(only for MessageReceived with header MESSAGE_HEADER_SEND_MODE sets to "send")
""
{% endhighlight %} 


**Java Class**

TODO

{% highlight java %}
public class Message {
    
    public String toJSON() {

    } 

    public Object toRAW() {

    }
}
{% endhighlight %}

## Sending Messages

There are several ways to send Herald message depending on the need of the sender. 

* `fire` : Fires (and forget) the given message to the target
* `fire_group` : Fires (and forget) the given message to the given group of peers
* `post` : Posts a message. The given methods will be called back as soon as a result is given, or in case of error 
* `post_group` : Posts a message to a group of peers. The given methods will be called back as soon as 
a result is given, or in case of error
* `send` : Sends a message, and waits for its reply
* `reply` : ...

#### Fire 
TODO

#### Fire_group 
TODO

#### Post 
TODO

#### Post_group
TODO

#### Send 
TODO

#### Reply 
TODO


## Implementations

* discovery
  * initial discovery
  * heartbeats
* knowledge propagation
* transport
* routing

## Using Herald

### Binding to the exported Herald Service
TODO

## Extending Herald

* How to implement a new discovery protocol?
* How to implement a new transport protocol?
