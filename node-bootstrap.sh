#!/usr/bin/env bash

sudo su

if [ ! -d "/var/www" ]
then

  # Add MongoDB to apt
  apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/10gen.list

  apt-get -y update
  apt-get install -y python-software-properties
  apt-get install -y vim git curl
  apt-get install -y memcached build-essential

  add-apt-repository -y ppa:chris-lea/node.js
  apt-get -y update

  apt-get install -y nodejs

  apt-get install -y mongodb-10gen

  ln -s /vagrant/www /var/www

  echo "Your default node server should now be listening on http://10.0.33.34/. For code, see: node-mongo-vagrant/www/default/server.js."

fi
