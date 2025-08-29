##
# You should look at the following URL's in order to grasp a solid understanding
# of Nginx configuration files in order to fully unleash the power of Nginx.
#        https://www.nginx.com/resources/wiki/start/
    # https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/
    # https://wiki.debian.org/Nginx/DirectoryStructure
    #
# In most cases, administrators will remove this file from sites-enabled/ and
# leave it as reference inside of sites-available where it will continue to be
# updated by the nginx packaging team.
#
# This file will automatically load configuration files provided by other
# applications, such as Drupal or Wordpress. These applications will be made
# available underneath a path with that package name, such as /drupal8.
#
# Please see /usr/share/doc/nginx-doc/examples/ for more detailed examples.
##

# Default server configuration

server {
    listen 443 ssl default_server;
    listen [::]:443 ssl default_server;

    server_name stage-dream.tech www.stage-dream.tech;

    ssl_certificate /etc/letsencrypt/live/stage-dream.tech/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/stage-dream.tech/privkey.pem;

# Portfolio
#       location /portfolio/ {
#               alias /home/deploy/portfolio/clear-commit-app/clear-commit-frontend;
#               index index.html;
#               try_files $uri $uri/ /portfolio/index.html?$args;
#       }

    location /portfolio/ {
        proxy_pass http://localhost:3003;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}

    location = /portfolio {
    return 301 /portfolio/;
}

location /portfolio/api/ {
    proxy_pass http://localhost:8000/;  # Твой бэкенд-сервер
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
}
location = /portfolio/api {
    return 301 /portfolio/api/;
}

#       location /1planer/ {
#               proxy_pass http://localhost:3001/;
    #               proxy_http_version 1.1;
#               proxy_set_header Upgrade $http_upgrade;
#               proxy_set_header Connection 'upgrade';
#               proxy_set_header Host $host;
#               proxy_set_header X-Real-IP $remote_addr;
#               proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
#               proxy_set_header X-Forwarded-Proto $scheme;
#               proxy_cache_bypass $http_upgrade;
#       }
#
#       location = /1planer {
#               return 301 /1planer/;
#       }

# Основной сайт
location / {
    proxy_pass http://localhost:3000;
include proxy_params;
proxy_set_header Host $host;
}

root /var/www/html;
index index.html index.htm index.nginx-debian.html;
}

# HTTP server (редирект на HTTPS)

server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name stage-dream.tech www.stage-dream.tech;
# Редирект ВСЕХ запросов на HTTPS
    return 301 https://$host$request_uri;
}

# HTTP - редирект на HTTPS
server {
    if ($host = 1planer.stage-dream.tech) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name 1planer.stage-dream.tech;

    return 301 https://$host$request_uri;


}

# HTTPS - основной сервер
server {
    listen 443 ssl;
    server_name 1planer.stage-dream.tech;

    ssl_certificate /etc/letsencrypt/live/1planer.stage-dream.tech/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/1planer.stage-dream.tech/privkey.pem; # managed by Certbot

    location /api/ {
        proxy_pass http://localhost:4200/;  # Проксирует /api/ → http://localhost:4200/
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cookie_path / "/; Secure; HttpOnly; SameSite=None";
    proxy_cache_bypass $http_upgrade;
}
    location / {
        proxy_pass http://localhost:3001;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;  # Для WebSocket
    proxy_set_header Connection 'upgrade';   # Для WebSocket
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;       # Для WebSocket
}
}

# listen 443 ssl default_server;
# listen [::]:443 ssl default_server;
#
# Note: You should disable gzip for SSL traffic.
# See: https://bugs.debian.org/773332
    #
# Read up on ssl_ciphers to ensure a secure configuration.
# See: https://bugs.debian.org/765782
    #
# Self signed certs generated by the ssl-cert package
# Don't use them in a production server!
#
# include snippets/snakeoil.conf

#       location / {
#               # First attempt to serve request as file, then
#               # as directory, then fall back to displaying a 404.
#               try_files $uri $uri/ =404;
#       }

# pass PHP scripts to FastCGI server
#
#location ~ \.php$ {
#       include snippets/fastcgi-php.conf;
#
#       # With php-fpm (or other unix sockets):
#       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
#       # With php-cgi (or other tcp sockets):
#       fastcgi_pass 127.0.0.1:9000;
#}

# deny access to .htaccess files, if Apache's document root
# concurs with nginx's one
#
#location ~ /\.ht {
#       deny all;
#}


# Virtual Host configuration for example.com
    #
# You can move that to a different file under sites-available/ and symlink that
# to sites-enabled/ to enable it.B
#
#server {
#       listen 80;
#       listen [::]:80;
#
#       server_name example.com;
#
#       root /var/www/example.com;
#       index index.html;
#
#       location / {
#               try_files $uri $uri/ =404;
#       }
#}
