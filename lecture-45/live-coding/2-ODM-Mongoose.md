# ODM, Mongoose, Data Types

Goal: 
Define ODM, what's Mongoose, core building blocks.

Define ODM
An Object Data Modeling library maps Javascript objects to database documents and back; lets you declare the shape and the rules of your data in a Schema and exposes a Model API for queries and writes.

Why're we using Mongoose?
    - schema: describe the fields and rules in one place (required, min/max length, etc)
    - models: readable CRUD methods intead of creating raw queries/commands
    - validation: catch bad input data to your application before it goes to the data
    - hooks: run code before/after you save or update

{
    _id: "abc",
    name: "test"
}

{
    _id: ObjectId,
    name: string
}
rule: name should not be null, undefined or an empty string