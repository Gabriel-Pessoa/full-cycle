# How to run app

## Step 1:
```bash
docker build -t gabrielpessoa/nginx:prod . -f Dockerfile.prod
```

## Step 2:
```bash
docker run -d --network laranet --name nginx -p 8080:80 gabrielpessoa/nginx:prod
```