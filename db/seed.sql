-- db/seed.sql
\c jwt_auth

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW()),
('Code418', '$2b$10$sCV/FAzVVD6JtYKpnTiDuO4.POCLg8tKRbo3uSflGJRHKMXsuODnK', 'code418@example.com', NOW(), NOW());


INSERT INTO quiz (name, description, difficulty_lvl) VALUES
('Animals Quiz', 'Test your knowledge of animals with this quiz.', 2),
('Instruments Quiz', 'Identify musical instruments in this quiz.', 3),
('Spanish (A1) Quiz', 'Test your basic Spanish vocabulary and grammar.', 1);


INSERT INTO question (quiz_id, text, correct_answer, option_one, option_two, option_three, option_four, sound_url) VALUES
-- Animals Quiz
(1, 'What animal makes this sound?', 'Cat', 'Cat', 'Dog', 'Pig', 'Cow', 'Cat meow.mp3'),
(1, 'What animal makes this sound?', 'Lion', 'Elephant', 'Giraffe', 'Lion', 'Turkey', 'https://example.com/giraffe_picture'),
(1, 'What animal makes this sound?', 'Monkey', 'Hawk', 'Tiger', 'Cheetah', 'Monkey', 'https://example.com/cheetah_picture'),
-- Instruments Quiz
(2, 'What instrument makes this sound?', 'Piano', 'Accordian', 'Piano', 'Trumpet', 'Guitar', NULL),
(2, 'What instrument makes this sound?', 'Violin', 'Flute', 'Organ', 'Violin', 'Drums', NULL),
(2, 'What instrument makes this sound?', 'Saxophone', 'Clarinet', 'Saxophone', 'Trombone', 'Trumpet', NULL),
-- Spanish (A1) Quiz
(3, 'What is this Spanish word?', 'Hola', 'Pollo', 'Gato', 'Hola', 'Por favor', NULL),
(3, 'What is this Spanish word?', 'Gracias', 'Manejar', 'Por favor', 'Lo siento', 'Gracias', NULL),
(3, 'What is this Spanish word?', 'Adios', 'Perro', 'Gato', 'Adios', 'Caballo', NULL);


INSERT INTO reviews (content, rating, quiz_id, user_id, username) VALUES
  ('Great quiz, very informative!', 4, 1, 1, 'demo'), 
  ('Not bad, but could be improved.', 3, 1, 2, 'Code418'),
  ('Excellent quiz, loved it!', 5, 2, 1, 'demo'),
  ('Average quiz, nothing special.', 2, 2, 2, 'Code418'), 
  ('Interesting quiz, learned a lot!', 4, 3, 1, 'demo'),
  ('Challenging quiz, but very helpful.', 3, 3, 2, 'Code418');


INSERT INTO status (user_id, quiz_id) VALUES
    (1, 2);