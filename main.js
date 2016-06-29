// please, modify those three pars
const Repository = "";
const Branch = "";
const FilePath = "";
// please, modify those three pars

const gith = require('gith').create(9000);
const execFile = require('child_process').execFile;

gith
({
    repo: Repository
}).on( 'all', function( payload ) 
{
    if( payload.branch === Branch)
    {
        execFile(FilePath, function(error, stdout, stderr) 
        { console.log( 'Deploying..' ); });
    }
});