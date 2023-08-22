# How to run app

## Step 1:
```bash
docker build -t gabrielpessoa/express-sample-app .
```

## Step 2:
```bash
docker run -p 3000:3000 gabrielpessoa/express-sample-app:latest 
```

## Step 3:
Run docker-compose up -d --build

## Step 4: 
Acess database and run scripts:  `docker exec -it mysql bash`
```bash
mysql -uroot -p
```
Entry with user and password

### Queries:
```bash
use users;

CREATE TABLE users (
  id BINARY(16) PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  admin BOOLEAN NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```