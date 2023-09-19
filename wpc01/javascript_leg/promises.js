const fs = require('fs');

function getDirFiles(){
    return new Promise (function(resolve, reject) {
        fs.readdir(__dirname, function(err, files) {
        if(err) return reject(err);
        resolve(files);    
        });
    });
}

getDirFiles()
    .then(function(files) {
        console.log('THEN',files);

    })

    .catch(function(err) {
        console.error('CATCH', err);

    });