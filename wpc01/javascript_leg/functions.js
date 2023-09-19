//callback funktioner
const path = require('path');
const fs = require('fs');

function callbackFunction(cb){
    fs.readdir(__dirname, (err, data) =>{
        cb (data);
     });
    
}

callbackFunction ((data) => {
    console.log(data);
})