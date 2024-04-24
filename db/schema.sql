-- db/schema.sql
DROP DATABASE IF EXISTS jwt_auth;

CREATE DATABASE jwt_auth;


\c jwt_auth


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quiz (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    description VARCHAR(500),
    difficulty_lvl INTEGER
);

CREATE TABLE question (
    id SERIAL PRIMARY KEY,
    quiz_id INTEGER REFERENCES quiz(id),
    text VARCHAR(500),
    correct_answer VARCHAR(200),
    option_one VARCHAR(100),
    option_two VARCHAR(100),
    option_three VARCHAR(100),
    option_four VARCHAR(100),
    sound_url TEXT
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  content VARCHAR(500),
  rating NUMERIC
  CHECK(rating >= 1 AND rating <= 5),
  username VARCHAR(100),
  quiz_id INTEGER REFERENCES quiz (id),
  user_id INTEGER REFERENCES users(id)
  ON DELETE CASCADE
);

CREATE TABLE status (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    quiz_id INTEGER REFERENCES quiz (id)
)