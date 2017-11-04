// callback hell version one
var fs = require("fs");
var fileName = "README.md";

var readCallback = (err, data)=>{
   if (err) {
      return console.error(err);
   }
          
   console.log(data);
}

var statCallback = (err,stats)=>{
   if (err) {
       return console.error(err);
   } else if ( !stats.isFile() ) {
       return console.error("Not a file");
   } 
      
   fs.readFile(fileName, "utf8", readCallback);
}

var existsCallback = (exists)=>{
   if (!exists) {
      return console.error("File doesn't exist");
   }

   fs.stat(fileName, statCallback);
}

fs.exists(fileName, existsCallback);
