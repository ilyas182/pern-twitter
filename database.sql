CREATE DATABASE pern-twitter;

CREATE TABLE tweet(
    tweet_id SERIAL PRIMARY KEY,
    content VARCHAR(255)
);

CREATE TABLE users (
id serial PRIMARY KEY,
name varchar NOT NULL,
email varchar NOT NULL,
handle varchar NOT NULL,
password varchar NOT NULL,
private boolean NOT NULL,
bio text,
location text
 );
