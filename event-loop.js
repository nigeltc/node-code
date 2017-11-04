// demonstrate the node event loop
console.log("One event loop cycle");
setTimeout( ()=>{
    console.log("A different cycle");
}, 100);
console.log("The same cycle");