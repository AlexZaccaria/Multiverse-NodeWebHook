Usage Step by Step (Debian):
```sh
$ cd /opt/
$ git clone https://github.com/AlexZaccaria/Multiverse-NodeWebHook.git
$ cd Multiverse-NodeWebHook/
$ npm install
$ cp NodeWebHook.service /etc/systemd/system/
$ service NodeWebHook start && service NodeWebHook status
$ systemctl enable NodeWebHook
```

Requirements
  - sudo
  - node
  - git pull working full auto with known_hosts and ssh keys ready to go
        (try running Deploy.sh for testing)
  - Github/Bitbucket calling yourdomain.whatever:9000/deploy/ as webhook

References
  - http://stackoverflow.com/a/29042953
  - http://luismatute.me/webhooks-for-autodeployments-in-nodejs/
