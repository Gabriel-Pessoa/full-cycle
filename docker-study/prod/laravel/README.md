# How to run app

## Step 1:
```bash
docker build -t gabrielpessoa/laravel:prod . -f Dockerfile.prod
```

## Step 2:
```bash
docker run -d --network laranet --name sample-app gabrielpessoa/laravel:prod 
```
obs: a porta não foi exposta para ser acessada pela máquina, mas apenas por outro container na mesma rede