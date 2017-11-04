// show command line arguments
console.log("Currently executing " + __filename + " in " + __dirname);
console.log("The current working directory is " + process.cwd());
process.argv.forEach( (value, index, args)=>{
    console.log("process.argv[" + index + "] = " + value);
});
