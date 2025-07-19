---
Title: "Specification Data Protocol"
GroupId: "ANS-115"
Description: "What is a Data-Protocol, how to define one, and how to publish the spec for one on Arweave."
Topics: 
- "spec"
- "data protocol"
Authors: 
- "vLRHFqCw1uHu75xqB4fCDW-QxpkpJxBtFD9g4QYUbfw"
- "89tR0-C1m3_sCWCoVCChg4gFYKdiH5_ZDyZpdJ2DDRw"
Forks: "kdLQ9Zver6YsOLpqc3WGfTX15Z7doV7aiyeWU9j3U6k"


---

# Specification Data-Protocol 

Authors: Forward Research Data Composability Group, Leads: DMac, and Sam Williams

This document explains what a `Data-Protocol` is, how to define one, and how to publish the spec for one on Arweave. It also inclues the specification of the *Specification* `Data-Protocol` which is applied to transactions that contain specification documents for `Data-Protocols`.

## What is a Data-Protocol?

A `Data-Protocol` is a common transaction format for content types on Arweave. This format applies to a transaction's tags and data.

## What is a Data-Protocol spec?

The specifications (specs) for `Data-Protocols` are human readable documents that describe the `Data-Protocols` transaction's tags and data format. These specs are published to Arweave as a transaction following the *Specification* `Data-Protocol` format (defined in this document).

Any posted spec document that conforms to the *Specification* `Data-Protocol` will appear in the "specs" app at https://specs.arweave.dev.

![](https://arweave.net/Mt3SF-YpUvr34N3IKv7RVXnYYKgwdv_bcIyw0EPU4OE)


> The above diagram shows the structure of a *Specification* `Data-Protocol`  transaction for the **PublicSquare** `Data-Protocol` (example).


## Why define Data-Protocols?

* Create common patterns for defining and classifying content on Arweave.
* Increase  discoverablility and composability of content types on Arweave.
* Create a globally unique, searchable registry of `Data-Protocol` names and formats.
* Enable the specs permaweb app where developers can read the specifications of `Data-Protocols` they encounter in the Arweave dataset.


## How to define a Data-Protocol
To define a `Data-Protocol` you must write a specification document describing the required and optional tags as well as the intended format for the transaction data.

This spec should be written in markdown and posted to arweave following the *Specification* `Data-Protocol` format. What follows is the definition of that format.

## Specification Data-Protocol
The purpose of the *Specification* `Data-Protocol` is to define a common transaction format for `Data-Protocol` specification documents. This serves two main purposes. 
1. Enables easy querying and discoverability of `Data-Protocols` and their names.
2. Enables the creation of a "specs" permaweb app where  ecosystem participants can collaborate around `Data-Protocol` definitions and specifications.

### Transaction Tags

The transaction tags that define the *Specification* `Data-Protocol` are as follows.

| Tag&nbsp;Name | Required | Tag&nbsp;Value |
|----------|-----------|-----------|
|Content-Type|required|text/markdown|
|Data-Protocol|required|Specification|
|Name|required| (name of data-protocol) |
|Principles|*optional*| (txid of markdown formatted principles doc) |
|Variant|*optional*| (label describing the variant) |
    
**Content-Type:** Used by Arweave gateways to know what MIME type to include in the HTTP headers when serving this content. Because *Specification* `Data-Protocols` have markdown formatted transaction data this value must always be `text/markdown`.

**Data-Protocol:** Contains the name of the `Data-Protocol` that the transaction conforms to. The required value for `Data-Protocol` specs is *Specification* . This is slightly confusing as we are about to use the *Specification* `Data-Protocol` to format a transaction that contains the written specification of a different `Data-Protocol`, the name of which is the value of the **Name** tag.

**Name:** This is the name of the `Data-Protocol` being defined by this transaction and its data.
    
**Principles:** (optional) The transaction ID (txid) of another transaction that contains a markdown formatted document of the principles the protocol being defined ascribes to.

**Variant:** (optional) As protocols evolve it may be necessary to track different variants, each with their own specification. This tag would contain a string label that identifies the specific variant.

**ANS-110 Tags (Title, Description, Topics):** These are not specific to the `Data-Protocol` specification but are good practice for all data on the permaweb. See the ANS-110 spec for more information.

### Transaction Data
  
The transaction data should be formatted as UTF-8 encoded markdown document. The contents of the document should describe the tags and values that define the `Data-Protocol` including its name and Content-Type. 
    
### Recursive Definition
  
If you inspect the tags of the transaction that posted this document you will see the following.
    
![](https://arweave.net/vK9mDjsqsFtZXtMsisgBM8JnTvczQ9flORa9hS5aym4)
    
You'll notice the **Name** and **Data-Protocol** tags both have the value "Specification". This is because this document both follows AND defines the *Specification* `Data-Protocol` that other specifications should follow.

### Discoverability
    
To retrieve the transaction IDs and tags of all of the `Data-Protocol` specifications you can query an Arweave graphQL endpoint with the following query.
    
```graphql
query {
    transactions(
        tags: {
            name: "Data-Protocol",
            values: ["Specification"]
        }
    ) {
        edges {
            node {
                id
            }
            tags {
                name
                value
            }
        }
    }
}
```
Or view them in the "specs" permaweb app located at https://specs.arweave.dev 
    
### Example: PublicSquare Data-Protocol
  
The following is an example of posting a specification for a *PublicSquare* `Data-Protocol` specification document. 
    
For those unfamiliar, [*PublicSquare*](https://gist.github.com/samcamwilliams/811537f0a52b39057af1def9e61756b2) was originally proposed by Arweave's founder and has been incorporated into several social media permaweb apps built on Arweave.
    
![](https://arweave.net/Mt3SF-YpUvr34N3IKv7RVXnYYKgwdv_bcIyw0EPU4OE)
    
When an app wants to take advantage of the *PublicSquare* `Data-Protocol` it would enable users to post their social media messages with the following transaction format.
    
![](https://arweave.net/NJPlcJoWgOiq6X1eKndEiGL8KkPQJA-rqccc8bT6gKA)
    
All of the tags for `PublicSquare` formatted social media posts conform to the tags described in the previous PublicSquare *Specification* `Data-Protocol` transaction.

### Find all PublicSquare Data-Protocol formatted posts
  
The following query will retrieve all the posts that conform to the *PublicSquare* `Data-Protocol`.

```graphql
query {
    transactions(
        tags: [
            {
                name: "Data-Protocol",
                values: ["PublicSquare"]
            },
            {
                name: "Variant",
                values: ["v1.0"]
            }
    ]
    ) {
        edges {
            node {
                id
            }
            tags {
                name
                value
            }
        }
    }
}
    
```

### Find the Specification of a Data-Protocol

If a developer encounters transactions that indicate they are following the *PublicSquare* `Data-Protocol`, it's possible to look up the specification for PublicSquare transactions by querying the *Specification* `Data-Protocol` namespace for a `Data-Protocol` named *PublicSquare*.

```graphql
query {
    transactions(
        tags: [
            {
                name: "Data-Protocol",
                values: ["Specification"]
            },
            {
                name: "Name",
                values: ["PublicSquare"]
            }
    ]
    ) {
        edges {
            node {
                id
            }
            tags {
                name
                value
            }
        }
    }
}
```
## Conclusion
  
The description of `Data-Protocol` specifications using the *Specifcation* `Data-Protocol` unlocks a standardized means of describing types of content on Arweave in human readable terms.
    
Discovering these `Data-Protocol` definitions and their provenance in Arweave's permanent data enables developers to easily compose with data that's come before eliminting the "cold start problem".
    
`Data-Protocols` also simplify the adoption an apps data into other applications in the future, long after the developer has moved on.