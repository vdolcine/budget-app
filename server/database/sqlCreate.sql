CREATE TABLE IF NOT EXISTS categories (
  category_id serial PRIMARY KEY,
  category_name VARCHAR,
  base_expense BOOLEAN DEFAULT 'false'
);

CREATE TABLE IF NOT EXISTS overview_june_2023 (
  budget_id serial PRIMARY KEY,
  total_category NUMERIC,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE IF NOT EXISTS expenses_june_2023 (
  item_id serial PRIMARY KEY,
  item_name VARCHAR,
  item_value NUMERIC,
  date_created TIMESTAMP,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- INSERT INTO categories (category_name, base_expense)
-- VALUES
-- ('savings', 'false'),
-- ('rent', 'true'),
-- ('utilities', 'true'),
-- ('groceries', 'true'),
-- ('gas', 'true'),
-- ('toiletries', 'true'),
-- ('phone', 'true'),
-- ('gym', 'false'),
-- ('fun', 'false');

-- INSERT INTO overview_june_2023 (total_category, category_id)
-- VALUES
-- (0.00, 1),
-- (1200.00, 2),
-- (150.00, 3),
-- (450.00, 4),
-- (50.00, 5),
-- (100.00, 6),
-- (35.00, 7),
-- (220.00, 8),
-- (175.00, 9);

-- INSERT INTO expenses_june_2023 (item_name, item_value, category_id)
-- VALUES
-- ('Everytable', 34.35, 4),
-- ('Ralphs', 73.53, 4),
-- ('Everytable', 27.40, 4),
-- ('Ralphs', 82.42, 4),
-- ('Alamo Drafthouse (Arrietty)', 21.00, 9),
-- ('Cash ATM (Massage Tip)', 20.00, 9),
-- ('The Alchemist', 14.25, 9),
-- ('Alamo Drafthouse (Spider-man)', 47.00, 9),
-- ('Amazon', 112.63, 6),
-- ('Google Fi', 26.45, 7),
-- ('Arco', 50.03, 5),
-- ('rent', 1200.00, 2),
-- ('at&t', 65.30, 3),
-- ('f45', 219.00, 8);

