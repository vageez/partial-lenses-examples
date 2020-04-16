https://www.cloudflare.com/learning/cdn/what-is-a-cdn/

## WHAT IS A CDN 
    A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.


### How does a CDN work?
    At its core, a CDN is a network of servers linked together.

#### The goal
    delivering content as 
        - quickly
        - cheaply
        - reliably
        - securely as possible. 
    
    In order to improve speed and connectivity, a CDN will place servers at the exchange points between different networks.

    These Internet exchange points (IXPs) are the primary locations where different Internet providers connect in order to provide each other access to traffic originating on their different networks. 
    
    By having a connection to these high speed and highly interconnected locations, a CDN provider is able to reduce costs and transit times in high speed data delivery.

    Initial user creates cache instance on CDN... 
    The following requests will be served by the CDN.

    User -> CDN -> [Origin Server] <- CDN <- User
    User _/
    User _/
    User _/

#### How does it improve Latency?

    - The globally distributed nature of a CDN means reduce distance between users and website resources. 
    Instead of having to connect to wherever a website’s origin server may live, a CDN lets users connect to a geographically closer data center. Less travel time means faster service.

    - Hardware and software optimizations such as efficient load balancing and solid-state hard drives can help data reach the user faster.

    - CDNs can reduce the amount of data that’s transferred by reducing file sizes    using tactics such as minification and file compression. Smaller file sizes mean quicker load times.

    - CDNs can also speed up sites which use TLS/SSL certificates by optimizing connection reuse and enabling TLS false start.