# Problem statement

Problem statement: Create a complete backend of a front desk Application with different roles like Admin , manager & Receptionist  by booking the service the mail needs to be triggered

Front desk system:
- a receptionist who can create a booking for a guest
- system stores the booking details and send an email
- a manager who can see all bookings; a receptionist can only see their own
- an admin can maintain or need visibility into the services

## Key stakeholders

Receptionist
    - talk to guests, create bookings
    - in our API: create a booking; accepting booking info and sending out email
    - cannot changes changes the services or permissions of other staff members

Manager
    - oversee the day-to-day operations, customer facing issues
    - in our API: can list all bookings; can confirm/cancel bookings
    - does not change staff member permissions or prices for services

Admin
    - oversee the system
    - in our API: can add/modify services; can manage user permissions


## Flow 

Step-by-step:
    - Receptionist logs in and receive a token
    - Create a booking
        - POST /bookings
        - Headers: 
            - Authorization: Bearer <token>
            - Body:
                {
                    "customerName": "Mohan",
                    "customerEmail": "m@gmail.com",
                    "seviceId": "<id of service - jetski>",
                    "slotStart": "2020-09-13T13:29:06.044Z"
                }

### Basic service collection 
services
    [
        {
            "name": "haircut",
            "price": 150
        }
    ]

## Endpoints
- login: user proves their identity once; every request after login should have a token
- create a booking: captures the guest's request at the front desk and triggers the email
- list bookings: support list bookings for a given day versus a range of days, or roles
- create service (admin): keeping prices & other sensitive information accurate

## HTTP Status
- 201 Created - when we create a booking
- 200 OK - when we list bookings
- 400 Bad Request - if the input is malformed (eg: past date, invalid email)
- 401 Unauthorized - the token is invalid (eg: expired or tampered with)
- 403 Forbidden
- 404 Not Found
