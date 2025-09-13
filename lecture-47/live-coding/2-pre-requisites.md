# Pre-requisites

## JWT

What?
- Signed token the server can verify. Recall the three parts: header, payload and signature.
- Signed but not encrypted

Why?
Every request to the server will not require complete user credentials

## RBAC (Role-Based Access Control)

## Define
Permissions associated to roles. Users have a single role. On each request to our server, we check the user's role against the route (eg: POST /user).

## Permissions in our system
- 'bookings.create' - POST /bookings: receptionist, manager, admin
- 'bookings.list' - GET /bookings
    - receptionist: only view their own bookings
    - manager/admin: view all bookings
- 'service.create' - POST /services: admin only

## Simple Mail Transfer Protocol (SMTP) for sending emails

What?
SMTP is standard protocol for mail servers to send emails

Rough email structure:
    from: your email ID
    to: receivers ID
    cc
    subject
    body
    attachments

### Why?
Send an email once a booking is successful

### What kind of configuration is required?

SMTP_HOST
SMTP_PORT
SMTP_USER/SMTP_PASS
SMTP_FROM

## Mongoose

ODM - object data modeling