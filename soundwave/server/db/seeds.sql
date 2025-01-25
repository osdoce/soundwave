\c trip_planner_db;

INSERT INTO users (name, email, password)
VALUES 
  ('Anakin', 'anakin@noemail.com', 'password'),
  ('Obi Wan', 'Obi@noemail.com', 'password'),
  ('R2', 'r2@noemail.com', 'password');


INSERT INTO trips (user_id, destination, start_date, end_date, budget)
VALUES 
  (1, 'Paris', '2025-06-01', '2025-06-10', 1500.00),
  (1, 'New York', '2025-07-15', '2025-07-20', 2000.00),
  (2, 'Tokyo', '2025-09-10', '2025-09-20', 3000.00),
  (3, 'Rome', '2025-08-05', '2025-08-15', 1800.00);


INSERT INTO activities (trip_id, activity_name, description, date, cost)
VALUES 
  (1, 'Eiffel Tower Visit', 'Visit the Eiffel Tower.', '2025-06-02', 25.00),
  (1, 'Louvre Museum Tour', 'Explore the world-famous museum.', '2025-06-03', 20.00),
  (2, 'Statue of Liberty', 'Tour the Statue of Liberty.', '2025-07-16', 30.00),
  (2, 'Broadway Show', 'Watch a live musical on Broadway.', '2025-07-17', 150.00),
  (3, 'Shibuya Crossing', 'Experience the busiest crossing in the world.', '2025-09-12', 0.00),
  (3, 'Mt. Fuji Tour', 'Guided tour of the famous Mt. Fuji.', '2025-09-15', 250.00),
  (4, 'Colosseum Tour', 'Historical tour of the Colosseum.', '2025-08-07', 40.00),
  (4, 'Vatican Museums', 'Visit the Vatican Museums and Sistine Chapel.', '2025-08-10', 50.00);

SELECT * FROM users;
SELECT * FROM trips;
SELECT * FROM activities;
