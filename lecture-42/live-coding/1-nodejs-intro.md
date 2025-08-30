# Section 1 - Why do we need Node.js?

In any real world system, what are the general aspects you need?
- File uploads -> streaming files

## The Origin

Ryan Dahl
I/O - input/output


## What's Node.js?
Used Google's V8 Javascript Engine with non-blocking, event-driven I/O layer so a single process could juggle many connections smoothly.


## What are the pieces that make up Node.js?

- V8 Engine: parses, optimizes and executes your JS
- libuv: a small C library that provies Node.js with "event loop" and a unified API for the operating system's (OS) async I/O (files, timers).
- event loop: scheduling mechanism. Your JS runs on a single main thread, and when it requests I/O, libuv hands that work to the OS or a background thread. While the OS is processing the I/O, the main thread stays free to handle other tasks

