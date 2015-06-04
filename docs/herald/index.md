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
* Chapter 7 - Using Herald
* Chapter 8 - Implementations
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
    def __init__(self, subject, 
                       content=None,
                       target_id=None, 
                       target_type=None, 
                       sender_uid=None, 
                       send_mode=None, 
                       replies_to=None):
        
{% endhighlight %}   


Example : 

{% highlight python %}
msg1 = herald.beans.Message(subject="toto/toti", content="Hello Peer!")

msg2 = herald.beans.Message("koko/koki")
msg2.set_content("Hello Herald!")    # notice that we can also send a message without content
{% endhighlight %}

Message headers are set by the Message constructor or by the sending service calls. At any way, you should not modify headers manually.

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
Message header containing a tag indicating if the message is replied or not 
(only for MessageReceived with header MESSAGE_HEADER_SEND_MODE sets to "send")
""
{% endhighlight %} 

For each of this headers and base data, the Message class provides properties to quickly retrieve the required (meta)data.

{% highlight python %}
@property
def uid(self):
    """
    Message UID
    """

@property
def timestamp(self):
    """
    Time stamp of the message
    """

@property
def sender(self):
    """
    Sender Peer UID
    """

@property
def send_mode(self):
    """
    Send mode
    """

@property
def replies_to(self):
    """
    UID of Peer to be replyed
    """

@Property
def target(self):
    """
    The target of the message (peer:<uid> or group:<name>)
    """

@Property
def target_id(self):
    """
    The id of the target of the message (<uid> or <group_name>)
    """

@Property
def target_type(self):
    """
    The type of the target of the message (peer or group)
    """


@property
def subject(self):
    """
    The subject of the message
    """

@property
def content(self):
    """
    The content of the message
    """
{% endhighlight %} 

For `MessageReceived` objects (which inherits from `Message` class), we have in addition:

{% highlight python %}
@property
def access(self):
    """
    Returns the access ID of the transport which received this message
    """

@property
def replied(self):
    """
    A tag (boolean) indicating if this message was sent back to the original peer 
    """
{% endhighlight %}

Herald Transports can send any Heral Message without any other metadata. All needed information is encapsulated in the Message object. In addition, the Message object can exports its data to three supported formats:


{% highlight python %}
def toJSON(self):
    """
    Returns a JSON representation of this message
    """

def toBSON(self):
    """
    Returns a Bonary JSON object of this message
    """

def toRAW(self):
    """
    Returns a RAW object of this message. No metadata will be sent, 
    only the content of the message
    """
{% endhighlight %} 

Herald Transports can take the exported data and send it using protocol specific transport.
At the other side, Herald Transports can construct a `Message` object from the received RAW, BSON, or JSON data. The `Message` class has three static methods for that:

{% highlight python %}
@Staticmethod
def fromJSON(json_message):
    """
    Returns a new Message from the provided json_message
    """

@Staticmethod
def fromBSON(bson_message):
    """
    Returns a new Message from the provided bson_message (Binary JSON)
    """

@Staticmethod    
def fromRAW(raw_message):
    """
    Returns a new Message from the provided raw_message
    """
{% endhighlight %} 

## Sending Messages

There are several ways to send Herald message depending on the need of the sender. 

* `fire` : Fires (and forget) the given message to the target
* `fire_group` : Fires (and forget) the given message to the given group of peers
* `send` : Sends a message, and waits for its reply
* `post` : Posts a message. The given methods will be called back as soon as a result is given, or in case of error 
* `post_group` : Posts a message to a group of peers. The given methods will be called back as soon as 
a result is given, or in case of error

* `reply` : ...

All this methods are defined in `herald/core.py` and are exported as a service `herald.SERVICE_HERALD`. 

#### Fire 

{% highlight python %}
def fire(self, target, message):
    """
    Fires (and forget) the given message to the target

    :param target: The UID of a Peer, or a Peer object
    :param message: A Message bean
    :return: The UID of the message sent
    :raise KeyError: Unknown peer UID
    :raise NoTransport: No transport found to send the message
    """        
{% endhighlight %}

This method will looks for the supported accesses on the target peer, and uses the corresponding local accesses of the local peer to send the message. The sending operation is delegated to the *transport* module associated with each access. This method returns immediatly. 


#### Fire_group 

{% highlight python %}
def fire_group(self, group, message):
    """
    Fires (and forget) the given message to the given group of peers

    :param group: The name of a group of peers
    :param message: A Message bean
    :return: A tuple: the UID of the message sent and the list of peers
    :raise KeyError: Unknown group
    :raise NoTransport: No transport found to send the message
    """
{% endhighlight %}

This method will looks for all peers of the targeted group, and send a copy of the message for each one. It returns a tuble consisting of the UID of the message sent and the list of peers.

#### Send 

{% highlight python %}
def send(self, target, message, timeout=None):
    """
    Sends a message, and waits for its reply

    :param target: The UID of a Peer, or a Peer object
    :param message: A Message bean
    :param timeout: Maximum time to wait for an answer
    :return: The reply message bean
    :raise KeyError: Unknown peer UID
    :raise NoTransport: No transport found to send the message
    :raise NoListener: Message received, but nobody was registered to
                       listen to it
    :raise HeraldTimeout: Timeout raised before getting an answer
    """
{% endhighlight %}

This method is similar to `fire` but the caller remains blocked until a response is returned back. 

#### Post 

{% highlight python %}
def post(self, target, message, callback, errback,
         timeout=180, forget_on_first=True):
    """
    Posts a message. The given methods will be called back as soon as a
    result is given, or in case of error

    The given callback methods must have the following signatures:
      - callback(herald, reply_message)
      - errback(herald, exception)

    :param target: The UID of a Peer, or a Peer object
    :param message: A Message bean
    :param callback: Method to call back when a reply is received
    :param errback: Method to call back if an error occurs
    :param timeout: Time after which the message will be forgotten
    :param forget_on_first: Forget the message after the first answer
    :return: The message UID
    :raise KeyError: Unknown peer UID
    :raise NoTransport: No transport found to send the message
    """
{% endhighlight %}

This method is similar to `Send`but the caller does not remain blocked. This method returns immediatly and the provided callback method will be called when an answer is received.

#### Post_group

{% highlight python %}
def post_group(self, group, message, callback, errback,
               timeout=180):
    """
    Posts a message to a group of peers. The given methods will be called
    back as soon as a result is given, or in case of error.

    If no timeout is given, the message UID must be forgotten manually.

    :param group: The name of a group of peers
    :param message: A Message bean
    :param callback: Method to call back when a reply is received
    :param errback: Method to call back if an error occurs
    :param timeout: Time after which the message will be forgotten
    :return: The message UID
    :raise KeyError: Unknown group
    :raise NoTransport: No transport found to send the message
    """
{% endhighlight %}

Similar to `Post` but the message will be sent for all peers of the targeted group.

#### Reply 

{% highlight python %}
def reply(self, message, content, subject=None):
    """
    Replies to a message

    :param message: Original message
    :param content: Content of the response
    :param subject: Reply message subject (same as request if None)
    :raise NoTransport: No transport/access found to send the reply
    """
{% endhighlight %}

This method is called to return a reply message to the original peer.

## Using Herald

Herald is used as Service in an [OSGi](http://osgi.org) platform runtime. 

### Herald Bundles

* `herald.core`
* `herald.directory`
* `herald.shell`
* herald... (transports, discovery, etc)

### Initial configuration

* `herald.FWPROP_NODE_UID`
* `herald.FWPROP_NODE_NAME`
* `herald.FWPROP_PEER_NAME`
* `herald.FWPROP_PEER_GROUPS`
* `herald.FWPROP_APPLICATION_ID`

This configurations are used by Herald Directory to create a local Peer.


### Binding to Herald Services

#### Directory

To retrieve information about peers.

`herald.SERVICE_DIRECTORY`

#### Core

To send messages.


## Implementations

* discovery
  * initial discovery
  * heartbeats
* knowledge propagation
* transport
* routing
* remote services



## Extending Herald

* How to implement a new discovery protocol?
* How to implement a new transport protocol?
