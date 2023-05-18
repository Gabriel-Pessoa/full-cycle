# criando uma imagem personalizada com base em uma imagem já existente 
FROM nginx:latest 

# Cria o diretório de trabalho e utiliza como padrão. Ou seja, ele cria um diretório dentro do container
# e navega até ele para ser utilizado. Com isso podemos criar novos arquivos dentro dessa pasta ou rodar o comando que quiser
WORKDIR /app

# rodando comandos dentro da minha imagem personalizada
RUN apt-get update && apt-get install nano -y

# Copia conteúdo de um fonte para um destino dentro do container
# Resumo: copia conteúdo da pasta html da minha máquina para o diretório do container
COPY html/ /usr/share/nginx/html