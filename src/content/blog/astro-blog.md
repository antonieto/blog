---
title: "A blog built with Astro"
date: "05-10-24"
summary: "Amidst a huge variety of tools to build web pages, I decided to use Astro to build this blog."
---

# How this site is built
Blogging is probably one of the most ancient traditions in the tech community. I decided to join the trend and started working on my own blogging site. I struggle a lot with making trivial decisions and choosing a technology to bring my blog to life was hard, due to the overwhelming amount of options out there.


## The initial plan: from scratch in Rust
I initially thought building a website like this was easy enough that writing it from scratch (even spinning up a Markdown parser) in rust was a cool way to learn the language basics. **Boy was I wrong**.

Rust is on its own a beast of a language if you're not very familiar with memory management and low level stuff. I initially planned to build the whole server. This is a list of the things I planned on writing from scratch.

- A web (HTTP) server
- A markdown parser

