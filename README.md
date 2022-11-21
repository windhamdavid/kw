# README

## About

[kriswindham.com](https://kriswindham.com)

I told my brother I'd take care of his web stuff before he passed. This site is mainly just his piano recordings alongside of some other materials. 

### Notes

22/11/21 - Moved the domain over to one of my hosts so I could add the music back for my parents. 

```apache
sudo mkdir -p /var/www/kriswindham.com/{html,log,backup}
sudo chown david:www-data -R /var/www/kriswindham.com/
sudo chmod -R 755 /var/www/kriswindham.com/html
sudo vi /etc/apache2/sites-available/kriswindham.com.conf

<VirtualHost *:80>
  ServerAdmin web@davidwindham.com
  ServerName kriswindham.com
  ServerAlias www.kriswindham.com

  DirectoryIndex index.html index.php
  Documentroot /var/www/kriswindham.com/html

  <Directory /var/www/kriswindham.com/html>
    Options Indexes FollowSymLinks
    DirectoryIndex index.html index.php
    AllowOverride All
    Order allow,deny
    Allow from all
    Require all granted
  </Directory>

  LogLevel warn
  ErrorLog /var/www/kriswindham.com/log/error.log
  CustomLog /var/www/kriswindham.com/log/access.log combined
</VirtualHost>

sudo a2ensite kriswindham.com.conf
sudo certbot --apache -d kriswindham.com -d www.kriswindham.com
```

##### Old DNS
A 64.13.232.143  
MS 10 mail.kriswindham.com - 216.70.64.154
