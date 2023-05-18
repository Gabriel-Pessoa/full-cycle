FROM nginx:latest

# Irá substituir o conteúdo da pasta html do container pelo html destino
COPY html /usr/share/nginx/html

# executo o script docker-entrypoint.sh que está dentro do meu container
ENTRYPOINT [ "/docker-entrypoint.sh" ]

# defino o comando que irá substituir o exec "$@", a última do script docker-entrypoint.sh 
CMD [ "nginx", "-g", "daemon off;" ]