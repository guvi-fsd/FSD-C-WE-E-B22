# Introduction to JWT

## Problem

After login, how does the server recognize the same user is making subsequent requests?

We need a piece of data the client can send each time that can be checked by the server quickly and safely.

That piece of data is a "token."

### What's a token?

A token is just a string that the server can check to decide "who are you?" and "has anything about this string been tampered with?"

Good tokens are tamper-proof, short-lived (expire), and portable.

## What's JWT?

- JSON Web Token is a token format usually used for web/mobile APIs
- Shape: three parts joined by dots: header.payload.signature
- header: tiny JSON about how the token is made (eg: which algorithm)
- payload: facts ("claims") about the user, like the user_id
- signature: a safety seal that proves the header+payload wasn't changed

Claims:
- sub (subject)
- iat (issued at)
- exp (expires)

