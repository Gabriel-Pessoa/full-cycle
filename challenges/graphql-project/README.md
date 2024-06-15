<h1 align="center">Challenge 3 - Graphql-Project</h1>

## Project description
   Software architecture study project. This project has a basic and isolated infrastructure, using Docker Compose to orchestrate running of multiple related containers together in a development environment.

## Install dependecies
- [Docker](https://docs.docker.com/install/) 
- [Docker Compose](https://docs.docker.com/compose/)

## 🚀 How to run app

## Step 1: 
Make sure to set all env variables from .env.template

## Step 2: Create and start mysql container:
```bash
make run/db
```

## Step 3: Run migrates and seeds:
```bash
make migrate/up
make seed/all
```

## Step 4: Create and start application container:
```bash
make run/app
```

# API endpoints

| Method   | URL                             | Description                   | Headers                        |
| -------- | ------------------------------- | ----------------------------- | ------------------------------ |
| `POST`   | `http://localhost:4000/graphql` | Run GraphQL queries on server | Content-Type: application/json |

[POST] http://localhost:4000/graphql

# REST API Example Requests

### [POST]

Ex1: Get a list of users.

+ Request (application/json)

    + Headers

            Content-Type: application/json

    + Body

            query {
                users {
                    userID
                    userName
                    userDateOfBirth
                    createdAt
                    updatedAt
                }
            }


+ Response 200 (application/json)

        {
            "data": {
                "users": [
                    {
                        "userID": "1",
                        "userName": "Jane Doe",
                        "userDateOfBirth": "1980-06-20T00:00:00.000Z",
                        "createdAt": "2024-04-13T23:43:56.149Z",
                        "updatedAt": null
                    },
                    {
                        "userID": "2",
                        "userName": "Joe Doe",
                        "userDateOfBirth": "1986-09-15T00:00:00.000Z",
                        "createdAt": "2024-04-13T23:43:56.149Z",
                        "updatedAt": null
                    },
                    {
                        "userID": "3",
                        "userName": "Peter Parker",
                        "userDateOfBirth": "2001-08-10T00:00:00.000Z",
                        "createdAt": "2024-04-13T23:43:56.149Z",
                        "updatedAt": null
                    }
                ]
            }
        }

Ex2: Get a user.

+ Request (application/json)

    + Headers

            Content-Type: application/json

    + Body

            query {
                user(userID: "3") {
                    userID
                    userName
                    userDateOfBirth
                    createdAt
                    updatedAt
                }
            }



+ Response 200 (application/json)

        {
            "data": {
                "user": {
                    "userID": "3",
                    "userName": "Peter Parker",
                    "userDateOfBirth": "2001-08-10T00:00:00.000Z",
                    "createdAt": "2024-06-15T15:19:31.680Z",
                    "updatedAt": null
                }
            }
        }