#!/bin/bash
cd /opt/node-bot
git pull git@bitbucket.org:thelooneycoders/node-bot.git
killall node
echo Done!
