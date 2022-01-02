const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

function generateFile(ext ,data){

    // generates a unique ID for the filename
    // can be further used for identifying user and storing in database
    const id =  uuid.v4()
    const dir = path.join(__dirname,'temp');

    // creates temporary directory for storing generated files
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);  
    }
    
    // writes code to file of related extension
    fs.writeFile(path.join(dir,id + '.' + ext), data , function(err) {
        if (err) {
           return console.error(err);
        }
    });

     
}

module.exports = generateFile;