# How to run app

## Install dependecies
1. docker
2. docker-compose

## Step 1: Create and start containers
```bash
docker-compose up -d --build
```

## Step 2: Acess bash into MySQL container
```bash
docker exec -it mysql bash
```

## Step 3: Acess the mysql database 
```bash
mysql -uroot -p
```
Entry with user and password

## Step 3: Create database schema and insert user default
```bash
use users;

CREATE TABLE users (
  id BINARY(16) PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  admin BOOLEAN NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, email, password, admin)
VALUES (
        UUID_TO_BIN('0e001554-1821-11ee-be56-0242ac120002'), 
        'superuser@email.com',
        'Y29wZSBkYXJlIG1vb2QgcGx1cyBlYXRzIG1lbnU=', 
        true 
    );
```
