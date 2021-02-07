FROM ubuntu:18.04
RUN apt update -y
RUN apt install apache2 -y
RUN apt install g++ -y
RUN apt install libcgicc3 -y
RUN apt install libcgicc-dev -y
RUN apt install make -y

copy frontend/index.html /var/www/html/frontend/index.html

copy conf/apache2.conf /etc/apache2/apache2.conf
copy conf/cgid.conf /etc/apache2/mods-enabled/
copy conf/cgid.load /etc/apache2/mods-enabled/
copy conf/cgi.load /etc/apache2/mods-enabled/

copy frontend/css/_normalize.css /var/www/html/frontend/css/_normalize.css
copy frontend/css/_zeroing.css /var/www/html/frontend/css/_zeroing.css
copy frontend/css/index.css /var/www/html/frontend/css/index.css

copy frontend/libs/js/serverRequest.js /var/www/html/frontend/libs/js/serverRequest.js

copy frontend/libs/background/particles.js /var/www/html/frontend/libs/background/particles.js
copy frontend/libs/background/app.js /var/www/html/frontend/libs/background/app.js 

copy frontend/libs/select/select.css /var/www/html/frontend/libs/select/select.css
copy frontend/libs/select/select.js /var/www/html/frontend/libs/select/select.js

copy frontend/img/footer/facebook.png /var/www/html/frontend/img/footer/facebook.png
copy frontend/img/footer/github.png /var/www/html/frontend/img/footer/github.png
copy frontend/img/footer/logo.png /var/www/html/frontend/img/footer/logo.png
copy frontend/img/footer/vk.png /var/www/html/frontend/img/footer/vk.png

copy frontend/img/select/misprint.png /var/www/html/frontend/img/select/misprint.png
copy frontend/img/select/repetition.png /var/www/html/frontend/img/select/repetition.png
copy frontend/img/select/uniqueness.png /var/www/html/frontend/img/select/uniqueness.png
copy frontend/img/select/validation.png /var/www/html/frontend/img/select/validation.png

copy frontend/img/main.png /var/www/html/frontend/img/main.png
copy frontend/img/result.png /var/www/html/frontend/img/result.png

RUN mkdir /var/www/cgi-bin
copy Makefile /var/www/cgi-bin/
copy script.cpp /var/www/cgi-bin/
copy db.txt /var/www/cgi-bin/db.txt
WORKDIR /var/www/cgi-bin
RUN make
RUN chmod 755 script.cgi
RUN rm Makefile script.cpp
CMD apache2ctl -D FOREGROUND
