FROM php:7.4-cli

WORKDIR /var/www

RUN apt-get update && \ 
    apt-get install libzip-dev -y

# Install php extensions
RUN docker-php-ext-install zip

# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

# Create project
RUN php composer.phar create-project laravel/laravel sample-app

ENTRYPOINT [ "php", "sample-app/artisan", "serve" ]

CMD [ "--host=0.0.0.0" ]