use fsd_quiz;
db.dropDatabase()  // start clean

// seed data (simple, numeric _id for easy joins/lookups)
db.users.insertMany([
  { _id: 1, name: "Mathesh" },
  { _id: 2, name: "Sivaram" }
])

db.orders.insertMany([
  { _id: 1, userId: 1, item: "Book" },
  { _id: 2, userId: 2, item: "Laptop" },
  { _id: 3, userId: 2, item: "Pen" }
])

// quick sanity counts (you'll verify again in the quiz)
db.users.countDocuments()
db.orders.countDocuments()
