FROM ubuntu:18.04
RUN apt update -y
RUN apt install apache2 -y
RUN apt install g++ -y
RUN apt install libcgicc3 -y
RUN apt install libcgicc-dev -y
RUN apt install make -y

copy index.html /var/www/html

copy conf/apache2.conf /etc/apache2/apache2.conf
copy conf/cgid.conf /etc/apache2/mods-enabled/
copy conf/cgid.load /etc/apache2/mods-enabled/
copy conf/cgi.load /etc/apache2/mods-enabled/

copy css/_normalize.css /var/www/html/css/_normalize.css
copy css/_zeroing.css /var/www/html/css/_zeroing.css
copy css/index.css /var/www/html/css/index.css

copy libs/js/serverRequest.js /var/www/html/libs/js/serverRequest.js
copy libs/js/result.js /var/www/html/libs/js/result.js
copy libs/background/bower.json /var/www/html/libs/background/bower.json
copy libs/background/package.json /var/www/html/libs/background/package.json
copy libs/background/particles.js /var/www/html/libs/background/particles.js
copy libs/background/demo/particles.json /var/www/html/libs/background/demo/particles.json
copy libs/background/demo/animation-styles/_animation.scss /var/www/html/libs/background/demo/animation-styles/_animation.scss
copy libs/background/demo/js/app.js /var/www/html/libs/background/demo/js/app.js 
copy libs/background/demo/js/lib/stats.js /var/www/html/libs/background/demo/js/lib/stats.js
copy libs/select/select.css /var/www/html/libs/select/select.css
copy libs/select/select.js /var/www/html/libs/select/select.js

RUN mkdir /var/www/cgi-bin
copy Makefile /var/www/cgi-bin/
copy script.cpp /var/www/cgi-bin/
copy db.txt /var/www/cgi-bin/db.txt
WORKDIR /var/www/cgi-bin
RUN make
RUN chmod 755 script.cgi
RUN rm Makefile script.cpp
CMD apache2ctl -D FOREGROUND
