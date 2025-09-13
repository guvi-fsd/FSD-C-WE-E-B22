# Data model and API Design

# Brainstorm

Question: what are the required data models for this system?

MongoDB

Access Patterns to data -> writing or reading?
- how much will we:
    - write to the staff collection? 
        - we'll create <1000 members
    - read from the staff collection?
    - write to the bookings collection?
        - if you've 1000 guests and guests usually return 2 times
            - ~2000 bookings
        - if you've 1,00,000 guests and guests usually return 3 times
            - ~3,00,000 bookings
    - read to the bookings collection?
        - usually will be read from when the booking is successfully completed
            to when the guests checks out

roles (eg: receptionist, guests, admins, managers)
    - name: string
    - permissions: string[]
        - eg: [id1, id2, id2]

permissions
    - id
    - name
    - description

guests
    - name
    - email: string; unique

staff
    - name: string
    - email: string; unique
    - role: admin, manager, receptionist - drives our RBAC checks
    - password

bookings
    <!-- - guestsIds -->
    - customerName
    - customerEmail
    - serviceId
    - bookingStart: 2025-09-13T09:00:00.000Z'
    <!-- - bookingEnd: 2025-09-15T09:20:00.000Z' -->
    - status - ACTIVE, CANCELLED, COMPLETED
    - bookingDate: '2025-09-13T14:39:41.722Z'
    - createdBy

services
    - name: string
        - Eg: "haircut", "shave", "spa"
    - description: string
    - price: number; must be >= 0
    - duration: number; >= 5 minutes
    - discounts: 
        - % based discounts
        - flat discounts
        - Buy 500, then 100 off

discounts
    - name
    - type: percentage, flat, buyXGetY


## API Design

### Features

Login
Bookings management
    - Listing bookings
    - View booking details
    - Update a booking
    - Cancel (delete) a booking)
Services
    - CRUD

### Out of scope
Sign up

Auth
- POST /auth/login
    - Input: { email, password }
    - Output: { token, user: { id, name, role } }

Services
- GET /services
    - Who? 
        - admin, manager, receptionist

- POST /services
    - Input: { name, duration, price... }
    - Output: created service

- PATCH /services
    - Input: duration OR price OR name
    - Output: updated service

- PUT
- DELETE

Bookings
- POST /bookings
    - Input: customerName, customerEmail...
    - Output: newly creating booking

- PATCH /bookings/:id

- GET /bookings

- GET /bookings/:id
