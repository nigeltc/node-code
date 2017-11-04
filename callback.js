// demonstrate callbacks
var fs = require("fs");

fs.readFile("README.md", "utf8", (error, data)=>{
    if (error) {
        return console.error(error);
    }
    console.log(data);
});
