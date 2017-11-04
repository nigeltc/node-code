// callback hell version one
var fs = require("fs");
var fileName = "README.md";

fs.exists(fileName, (exists)=>{
   if (!exists) {
       return console.error("File doesn't exist");
   }
   
   fs.stat(fileName, (err,stats)=>{
      if (err) {
          return console.error(err);
      } else if ( !stats.isFile() ) {
          return console.error("Not a file");
      } 
      
      fs.readFile(fileName, "utf8", (err, data)=>{
          if (err) {
              return console.error(err);
          }
          
          console.log(data);
      });
   });
});