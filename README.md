# Web

## Clone File
```sh
[If Hi-Class folder is not exist]
~ $ mkdir Hi-Class

~ $ cd Hi-Class
~/Hi-Class $ git clone https://github.com/Hi-Class/Web.git
```
## Create DataBase
```sh
~ $ sudo apt-get install mariadb-server -y
~ $ sudo mysql -u root
mysql> use mysql;
mysql> update user set password=password('1234') where user='root';
mysql> update user set plugin='mysql_native_password' where user='root';
mysql> flush privileges;
mysql> create database mymydb;
mysql> use mymydb;
mysql> create table data(idx INT, mp4Url VARCHAR(70));
mysql> insert into data values(1,'./src/img/amongus.gif');
mysql> exit;
```
## Install and Setting Apache Server
```sh
~ $ sudo apt update
~ $ sudo apt install apache2 -y
~ $ sudo apt install php libapache2-mod-php php-mysql -y
~ $ sudo nano /etc/apache2/apache2.conf
    170 line revise "<Directory /var/www/>" to "<Directory /home/pi/Hi-Class/Web/>"
~ $ sudo nano /etc/apache2/sites-enabled/000-default.conf
    12 line revise "DocumentRoot /var/www/html" to"DocumentRoot /home/pi/Hi-Class/Web"

[Server Restart]
~ $ sudo /etc/init.d/apache2 restart
```

## Run
1. Apache Server is always running.  
1. Connect to the same network as Raspberry Pi.  
1. Open web browser and visit Raspberry Pi IP.