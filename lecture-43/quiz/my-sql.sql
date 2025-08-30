-- create a fresh playground
DROP DATABASE IF EXISTS fsd_quiz;
CREATE DATABASE fsd_quiz;
USE fsd_quiz;

-- users table
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

-- orders table
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT NOT NULL,
  item VARCHAR(100) NOT NULL,
  CONSTRAINT fk_orders_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- seed data (mirrors the sample you’ve seen)
INSERT INTO users (id, name) VALUES
  (1, 'Mathesh'),
  (2, 'Sivaram');

INSERT INTO orders (id, user_id, item) VALUES
  (1, 1, 'Book'),
  (2, 2, 'Laptop'),
  (3, 2, 'Pen');

-- quick sanity counts
SELECT 'users' AS table_name, COUNT(*) AS rows_count FROM users
UNION ALL
SELECT 'orders', COUNT(*) FROM orders;
