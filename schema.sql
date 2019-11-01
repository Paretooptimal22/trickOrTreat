DROP DATABASE IF EXISTS trickOrTreat_db;

CREATE DATABASE trickOrTreat_db;

USE trickOrTreat_db;

CREATE TABLE leaderBoard (
  user-name VARCHAR(255) NOT NULL,
  candy-count INTEGER(10) NOT NULL
);