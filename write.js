// write a file
var fs = require("fs");
var data = "Twas brillig and the slithy toves\nDid gyre and gimble in the wabe.\n"

fs.writeFile( __dirname + "/foo.txt", data, function(err) {
    if (err) {
        return console.error(err);
    }
});
