---
layout: docpage
title: Herald - Discovery and Transport Framework
comments: true
parent: Documentation
toc: true
toc_numerate: true
toc_exlude: h1, h4, h5, h6
parent_url: ../1.1
---

<a name="introduction"/>

## Introduction

Cohorte platform is based on *Herald Framework* for the discovery and transport between the different isolates. However, Herald is a completely seperate project which could be used for your own cases.

Herald abstarct the transport protocols used between peers (communicating entities), and allows each peer to send message to one or more peers by just knowing its UID (or the group name).

Herald is based on [iPOPO]() python component framework and hence requires [Pelix]() runtime to run. It has also a Java implementation that works on any [OSGi]() platform with [iPOJO]() component model.

This documentation is about `Herald Specification v1`.

This specification is split into this chapters:

* Chapter 1  - [Introduction](#introduction)
* Chapter 2  - [Terminology](#terminology)
* Chapter 3  - [Message Format](#message_format)
* Chapter 4  - [Sending Messages](#sending_messages)
* Chapter 5  - [Receiving Messages](#receiving_messages)
* Chapter 6  - [Transport](#transport)
* Chapter 7  - [Discovery](#discovery)
* Chapter 8  - [Using Herald](#using_herald)
* Chapter 9  - [Implementations](#implementations)
* Chapter 10 - [Extending Herald](#extending_herald)

<a name="terminology"/>

## Terminology

<table class="table table-striped table-bordered table-hover table-condensed">
<thead><tr><th>Term</th><th>Definition</th></tr></thead>
<tbody><tr><td><b>OSGi</b></td><td>
Specification for modular and dynamic applications based on service-oriented approach (see <a href="http://osgi.org">http://osgi.org</a>).
</td></tr>
<tr><td><b>Peer</b></td><td>
Represents one OSGi node (runtime). It has a unique UID (Universal IDentifier) and a symbolic name.
</td></tr>
<tr><td><b>Group</b></td><td>
A set of Peers regrouped logically in one group. A peer can be associated to several groups.
</td></tr>
<tr><td><b>Access</b></td><td>
Supported protocols for one peer. Two peers should have the same access type to communicate.
</td></tr>
<tr><td><b>Message</b></td><td>
Object containing the data to be transported and metadata useful for the framework or user needs.
</td></tr>
<tr><td><b>Directory</b></td><td>
Internal storage on each peer that has information about discovered peers and their capabelities.
</td></tr>
<tr><td><b>Discovery</b></td><td>
Operation on which a peer discover other peers of the same application (having same AppID). Their information is stocked on the local Directory.
</td></tr>
<tr><td><b>Transport</b></td><td>
Communication protocol used to transport messages between peers. 
</td></tr>
<tr><td><b>AppID</b></td><td>
An application ID is associated to each peer: only peers with the same application ID can discover each other.
</td></tr>

</tbody>
</table>


<a name="message_format"/>

## Message Format

Herald Message is a JSON object with the following structure :

{% highlight json %}
{
  
  "headers": {  
     "herald-version": 1,    # herald specification version
     "uid": "",              # the unique universal identifier of the message.     
     "timestamp" : 0,        # the time the message was created.      
     "sender-uid": "",       # the uuid of the peer which emits the message.
     "target-peer": "",      # uid of the target peer (fire mode)
     "target-group": "",     # name of the target group (fire_group mode)    
     "replies-to": "",       # uid of message that triggeed this one (send mode)          
  },  
  
  "subject" : "",            # the subject of the message. e.g., toto/titi
  "content" : {},            # the message content
   
  "metadata" : {}            # user provided meta-infos and future features
}
{% endhighlight %}

Here is a description and semantic of each of this entries :

<table class="table table-striped table-bordered table-hover table-condensed">
<thead><tr><th>Entry</th><th>Description</th></tr></thead>
<tbody>
<tr><td><b>headers</b></td><td>
Each message has a map of standard headers about the message. This headers are set by the framework and not by users. In case of a newly sent message, we have :<br/>
    <ul>
        <li><b>uid:</b> the message unique identifier.</li>
        <li><b>herald-version:</b> Herald Specification version (integer).</li>
        <li><b>timestamp:</b> the data on which the message was created.</li>
        <li><b>sender-uid:</b> the UID of the sender (peer).</li>
        <li><b>target-peer:</b> the UID of the peer target of this message (Not set if the target is a group)</li>
        <li><b>target-group:</b> the name of the group target of this message (Not set if the target is a specific peer)</li>
    </ul>
    In addition, for a response message, we have also this header :
    <ul>
        <li><b>replies-to:</b> the UID of the message that triggered this one and which its sender (identified by 'sender-uid' header) is waiting for a response.</li>        
    </ul>
    Herald Transports could also add other specific headers that should be different from the standard headers.
</td></tr>

<tr><td><b>subject</b></td><td>
a String identifying the purpose of the message. It is recommended to use URI (Uniform Resource Identifier) syntax. E.g., <code>"/update/info"</code>. Message receivers can filter which messages to take according to their subjects.
</td></tr>
<tr><td><b>content</b></td><td>
any content.
</td></tr>
<tr><td><b>metadata</b></td><td>
a map of extra informations (user-specific).
</td></tr>

</tbody>
</table>

<a name="creating_messages"/>

## Creating Messages


<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#manipulate_message_python" aria-controls="python" role="tab" data-toggle="tab">Python</a></li>
    <li role="presentation"><a href="#manipulate_message_java" aria-controls="java" role="tab" data-toggle="tab">Java</a></li>    
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="manipulate_message_python">

</p>

  
<p>The <code>Message</code> class encapsulates Herald JSON message. It is defined in the module <code>herald.beans</code>.</p>
<p>The following snipet shows the constructor's code of this class in Python programming language.</p>


{% highlight python %}
class Message(object):
    """
    Represents a message to be sent
    """
    def __init__(self, subject, content=None):
        # ...
{% endhighlight %}


The <code>Message</code>'s constructor automatically initializes basic headers including message uid, its timestamp, and the Herald's specification version.

<p>Example :</p> 

{% highlight python %}
import herald.beans.Message as Message

# creates a message which has 'toto/toti' as subject and "Hello Peer!" as content
msg1 = Message("toto/toti", "Hello Peer!")   

# creates a message without a content
msg2 = Message(subject="koko/koki")
# set the content of the message
msg2.set_content("Hello Herald!")    
{% endhighlight %}




    </div>
    <div role="tabpanel" class="tab-pane" id="manipulate_message_java">
        
        Java    
    </div>    
  </div>

</div>


<hr/>

<a href="manipulating_messages"/>

## Manipulating Messages

Each message has a set of Headers (set by the framework), a subject and a content (set by the user). The content could be of any primitive type or a serializable bean object. In addition, user can add a set of metadata associated to the message's content. All the headers, subject, content, and the metadata are transmitted to the targeted peer. 

The Message class has the following methods to retreive and set those informations.

<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#create_message_python" aria-controls="python" role="tab" data-toggle="tab">Python</a></li>
    <li role="presentation"><a href="#create_message_java" aria-controls="java" role="tab" data-toggle="tab">Java</a></li>    
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="create_message_python">

</p>

Basic information methods : 

{% highlight python %}
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
    
def set_content(self, content):
    """
    Sets content
    """   
{% endhighlight %}

Headers related methods :

{% highlight python %}
@property
def headers(self):
    """
    Message headers
    """

def add_header(self, key, value):
    """
    Adds a header
    """
    
def get_header(self, key):
    """
    Gets a header value 
    """

def remove_header(self, key):
    """
    Removes a header from the headers list
    """

{% endhighlight %}   
 
 List of methods allowing a direct access to standard headers :
 
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
{% endhighlight %} 

Message metadata manipulation :

{% highlight python %}
@property    
def metadata(self):
    """
    All message metadata
    """
        
def add_metadata(self, key, value):
    """
    Adds a metadata
    """
    
def get_metadata(self, key):
    """
    Gets a metadata
    """
    
def remove_metadata(self, key):
    """
    Removes a metadata 
    """
{% endhighlight %}




    </div>
    <div role="tabpanel" class="tab-pane" id="create_message_java">
        
        Java    
    </div>    
  </div>

</div>


Herald Transports can take the exported data and send it using protocol specific transport.
At the other side, Herald Transports can construct a `Message` object from the received JSON data (serialization of the `Message` class). 

<hr/>

<a name="sending_messages"/>

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

<a name="receiving_messages"/>

## Receiving Messages

<a name="transport"/>

## Transport

<a name="discovery"/>

## Discovery

All peers of the same application (having same AppID) are discovered by Herald. This is done by Transport providers implementing specific discovery techniques. 

What ever the discovery technology used by transport providers, they should all respect the following protocol :

When a peer L (local) detects another peer D (discovered) :

* L sends a message to D containing a description about thim (L_dump) and having `herald/discovery/step1` as subject.

* D saves L_dump on his local directory without notifying other listeners about this message arrival.

* D sends a message to L containing its description (D_dump) and having `herald/discovery/step2` as subject.

* L saves D_dump on his local directory and notifies Herald about this new discovered peer. It is now accessible and messages could be sent to it.

* L sends a message to D to finish the discovery synchronization, it has `herald/discovery/step3` as subject.

* D receives this message and notifies Herald about this new discovered peer.  

<a name="using_herald"/>

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

<a name="implementations"/>

## Implementations

### Discovery

#### HTTP

In HTTP protocol, Herald uses HTTP Multicast to discover other peers.

1) herald/rpc/discovery/add
2) herald/directory/discovery/step1
3) herald/directory/discovery/step3



  * initial discovery
  * heartbeats

* knowledge propagation
* transport
* routing
* remote services

<a name="extending_herald"/>

## Extending Herald


{% highlight python %}
def to_json(self):
    """
    Returns a JSON representation of this message
    """

def to_bson(self):
    """
    Returns a Bonary JSON object of this message
    """

def to_raw(self):
    """
    Returns a RAW object of this message. No metadata will be sent, 
    only the content of the message
    """
{% endhighlight %} 

### How to implement a new discovery protocol?

### How to implement a new transport protocol?

![Herald Transport Extend](herald_transport_extend.png)

Each specific transport should provide the service `herald.SERVICE_TRANSPORT`. This service has the following methods that should be implemented:

{% highlight python %}
def fire(self, peer, message, extra=None):
    """
    Fires a message to a peer

    :param peer: A Peer bean
    :param message: Message bean to send
    :param extra: Extra information used in case of a reply
    :raise InvalidPeerAccess: No information found to access the peer
    :raise Exception: Error sending the request or on the server side
    """

def fire_group(self, group, peers, message):
    """
    Fires a message to a group of peers

    :param group: Name of a group
    :param peers: Peers to communicate with
    :param message: Message to send
    :return: The list of reached peers
    """
{% endhighlight %}
