'use strict'

// please, modify this Path
const FilePath = "";

const express = require('express'); 
const http = require('http');
const app = express();

app.set('port', 9000);
app.post('/deploy/', function (req, res) 
{  
    let spawn = require('child_process').spawn;
    let deploy = spawn('sh', [ FilePath ]);

    deploy.stdout.on('data', function (data) 
    { console.log(''+data); });

    deploy.on('close', function (code) 
    { console.log('Child process exited with code ' + code); });
    res.json(200, {message: 'Github Hook received!'})
});

http.createServer(app).listen(app.get('port'), function()
{ console.log('Express server listening on port ' + app.get('port')); });