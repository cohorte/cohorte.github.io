---
layout: docpage
title: Herald Framework
comments: false
toc: true
toc_numerate: true
toc_exlude: h1, h4, h5, h6
---

Cohorte platform is based on Herald Framework for the discovery and transport between the different isolates. However, Herald is a completely seperate project which could be used for your own cases.
Herald is based on [iPOPO]() python component framework and hence requires [Pelix]() runtime to run. It has also a Java implementation that works on any [OSGi]() platform with [iPOJO]() component model.

## Main Concepts

* main concepts
  * peer
  * groups
  * access
  * messages

An application ID is associated to each peer: only peers with the same application ID can discover each other.

## Internal Architecture

Herald is composed of a set of peers running on one or several physical (or virtual) machines.
Each peer has a local directory containing a full knowledge about all other peers.

* Directory
  * internal (non persistente) cache + synchronisation (heartbeats)
* Discovery
  * multicast HTTP, XMPP rooms
* Transport
  * HTTP protocol, XMPP protocol
* Router
  * ?

## Functionning


* discovery
  * initial discovery
  * heartbeats
* knowledge propagation
* transport
* routing


## Message Format

Herald Message is a JSON object with the following structure :

{% highlight json %}
{
  "herald-version": 1,       # herald version
  
  "headers": {
     "uid": "",              # the unique universal identifier of the message.
     "timestamp" : 0,        # the time the message was created.      
     "sender-uid": "",       # the uuid of the peer which emits the message.
     "mode": "",             # the sending mode (fire, post, send)
     "replies-to": "",       # uid of message that triggeed this one (send mode).
  },
  
  "target" : "",             # peer:<uuid> or group:<name>
  "subject" : "",            # the subject of the message. e.g., toto/titi
  "content" : {},            # the message content
   
  "extra" : {}               # transport related infos and future features
}
{% endhighlight %}

**Python Class**

We show here only the constructor.

{% highlight python %}
class Message(object):
    """
    Represents a message to be sent
    """
    def __init__(self, subject, target, target_type, sender_uid=None, mode=None, 
                 replies_to=None, content=None):
        """
        Sets up members

        :param subject: Subject of the message
        :param target: Target of the message (peer uid or group name)
        :param target_type: Type of the target (peer or group)
        :param sender_uid: UID of the peer sender of the message
        :param mode: sending mode (fire, post, send)
        :param replies_to: UID of the message that triggered this one as response (send mode).
        :param content: Content of the message (optional)
        """
        # set herald specification version
        self._herald_version = HERALD_SPECIFICATION_VERSION        
        # init headers
        self._headers = {}
        self._headers[UID] = str(uuid.uuid4()).replace('-', '').upper()
        self._headers[TIMESTAMP] = int(time.time() * 1000)        
        self._headers[SENDER_UID] = sender_uid
        self._headers[MODE] = mode
        self._headers[REPLIES_TO] = replies_to
        # init target. e.g., peer:1234567890 or group:all        
        self._target = "{0}:{1}".format(target_type, target)
        # init subject
        self._subject = subject
        # init content
        self._content = content
        # extra information
        self._extra = {}
{% endhighlight %}   

**Java Class**

TODO

{% highlight java %}
public class Message {
    public String toJSON() {

    }  
}
{% endhighlight %}

## Herald Services

* `fire` : Fires (and forget) the given message to the target
* `fire_group` : Fires (and forget) the given message to the given group of peers
* `post` : Posts a message. The given methods will be called back as soon as a result is given, or in case of error 
* `post_group` : Posts a message to a group of peers. The given methods will be called back as soon as 
a result is given, or in case of error
* `send` : Sends a message, and waits for its reply
* `reply` : ...

## Using Herald

### Binding to the exported Herald Service
TODO

### Sending messages   

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


## Extensing Herald

* How to implement a new discovery protocol?
* How to implement a new transport protocol?
