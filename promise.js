// demonstrate a promise
var fs = require("fs");

var promise = new Promise( function(resolve, reject) {
    fs.readFile("README.md", "utf8", function(err, data) {
        if ( err ) {
            return reject(err);
        }
        resolve(data);
    });
});

promise.then( function(result) {
    console.log(result);
}, function(err) {
    console.error(err);
});
