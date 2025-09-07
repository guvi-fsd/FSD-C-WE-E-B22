# MVC for APIs

Why we need this MVC architecture?

Our single-file server.js works, but it mixes many concerns: routing validation, error shaping, storage, etc.

As the features grow, the current structure hurts readability, testing, and slows down development. 

What's the better API request lifecycle?

Client -> Router -> Controller -> (Service) -> Model -> Database

Definitions

Router
    - Map HTTP method and the path to a controller function
    - Contains zero business logic and zero database interaction
    - Example: GET /notes -> listNotes

Controller
    - Handles one request. Validates inputs enough to call the service.
    - Choose the status codes. Shape the final JSON
    - Zero database interaction. Talk to a service or model directly
    - Example: read query params q, limit & offset for a search function; return 200 with an array

Service (not always mandatory)
    - Hold reusable operations that requirement business logic
    - Example: will define the search function that interacts with the model, applies pagination for a list of search results -- independent of HTTP

Model
    - The data-access layer (DAO) for a resources. In MongoDB, a Mongoose model expose methods like find, findById, create, etc
    - Knows how to talk to the database over a protocol TCP
    - Eg: find documents related to users


Router

Error Middleware
