var fs = require("fs");

var stream = fs.createReadStream(__filename);

stream.on("data", (data)=>{
    var chunk = data.toString();
    process.stdout.write(chunk);
});

stream.on("end", ()=>{
    process.stdout.write("\n");
});

stream.on("error", (err)=>{
    console.error(err.message);
});
