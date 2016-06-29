#!/bin/bash
cd /opt/
git pull git@bitbucket.org:thelooneycoders/node-bot.git
killall node
echo Done!
