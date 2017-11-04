var fs = require("fs");

try {
    var data = fs.readFileSync("README.md", "utf8");
    console.log(data);
} catch(err) {
    console.error(err);
}
