# HTTP Basics (or how the internet works)
Lecture on http and the basic structure of the internet.

## Objective
Students will be able to...

- Understand the basic architecture of the HTTP protocol
- Apply CURL to use HTTP headers and bodies
- Distinguish HTTP action verbs
- Understand the difference between a server and a client and the protocol interaction between the two
- Replicate the basic structure of the internet

## Link
We are starting our adventure into the land of clients and servers, HTTP requests and responses. This lecture will teach you all the basics you need to know about the internet in general and how a big part of it works.

## Educate and Engage
### Architecture Of The Internet
Whenever you check your mails, watch a video on YouTube, or chat with your friends, it seems like there is one wire connecting you to what you want. This works because the internet is a network of networks that share with each other. Computers, phones, printers etc are hooked up to each other to create this network. Every device on the internet has its own, unique address, the IP address (Internet Protocol address), to receive and send content.

When you open up a website, e.g. Google, you reach it by typing its IP address. For Google, as of Nov 28th, 2014, the IP address is 74.125.131.104. If you go ahead and paste this address into your browser's URL bar, it will take you to Google's website.

However, since IP addresses are hard to remember and barely human readable, so-called domains, such as "google.com" are used as synonyms.

Overly simplified, you can picture the internet working as follows. For example, let's see what happens when we open up google.com.

Your computer is connected to a router -> you open up a browser and open google.com -> your computer sends that address to your router -> your router connects to a DNS server to find the IP address corresponding to google.com -> the DNS server sends you the matching IP address for google.com -> you connect to that IP address -> Google then sends you back information (i.e. the webpage as HTML) -> your browser reads the HTML, parses it, and displays it in a human readable format as a webpage

### The HTTP Protocol
"HTTP" stands for "Hypertext Transfer Protocol". Hypertext is text that contains references ("hyperlinks", or simply "links") to other text. Basically that means hypertext is a webpage that can contain links to other webpages. A protocol transfering hypertext is therefore a protocol that sends webpages.

HTTP is therefore the last part of the request flow described above. It happens when you connect to Google's servers and they send you a response back.

The header contains, among others, two important pieces of information: the response status, and the HTTP verb. The most common are the response status "OK" (code 200), and the verbs "GET" to retrieve data and "POST" to create data.

The chain from client (your computer) to server can be replicated using [Curl](http://curl.haxx.se/) and can be illustrated as follows:

![Client to server flow](http://www.tenouk.com/visualcplusmfc/setupiisnweb_files/image001.png)

The server usually has a database and a file system.
