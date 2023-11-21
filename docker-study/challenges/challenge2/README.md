<h1 align="center">Software Architecture - Challenge Two</h1>

## Project description
   Software architecture study project. This project has a basic and isolated infrastructure, using Docker Compose to orchestrate running of multiple related containers together in a development environment.

## Install dependecies
- [Docker](https://docs.docker.com/install/) 
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 How to run app

## Step 1: 

Make sure to set all env variables from .env.template (`challenges/challenge2/user-service/.env.template`).

## Step 2: Create and start containers
```bash
docker-compose up -d --build
```

## Step 3: Acess bash into MySQL container
```bash
docker exec -it mysql bash
```

## Step 4: Acess the mysql database 
```bash
mysql -uroot -p
```
Entry with password: `root`

## Step 5: Create database schema and insert user default
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

# API endpoints

| Method   | URL                                                                | Description                                     | Headers              |
| -------- | ------------------------------------------------------------------ | ----------------------------------------------- | -------------------- |
| `GET`    | `http://localhost:8080/users/0e001554-1821-11ee-be56-0242ac120002` | Retrieve user by id.                            | X-API-KEY: <api_key> |
| `POST`   | `http://localhost:8080/users/0e001554-1821-11ee-be56-0242ac120002` | Create a new user from already created user id. | X-API-KEY: <api_key> |
| `GET`    | `http://localhost:8080/users`                                      | Retrieve all users.                             | X-API-KEY: <api_key> |


# REST API Example Requests

### Create [POST]

Create a new user from already created user id.

+ Request (application/json)

    + Headers

            X-API-KEY: <api_key> 

    + Body

            {
              "email": "example@email.com",
              "password": "gcGx1cyBlYXRzIG1lbnU=",
              "admin": false
            }

+ Response 200 (application/json)

      {
      	"id": "0e001554-1821-11ee-be56-0242ac120002",
      	"email": "example@email.com",
      	"password": "gcGx1cyBlYXRzIG1lbnU",
      	"admin": false,
      	"created_at": "2023-11-20T23:55:16.000Z"
      }
