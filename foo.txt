var fs = require("fs");

fs.unlink("foo.txt", (err)=>{
    if (err) {
        console.log("No such file");
    }
    var readStream = fs.createReadStream(__filename);
    var writeStream = fs.createWriteStream("foo.txt");
    readStream.pipe(writeStream);
});

