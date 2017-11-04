// demonstrate events and emitters
var util = require("util");
var EventEmitter = require("events").EventEmitter;

function Counter() {
    var self = this;
    
    // call EventEmitter constructor
    EventEmitter.call(this);
    var count = 0;
    
    // start counter
    this.start = function() {
        this.emit("start");
        setInterval( function() {
            self.emit("count", count);
            count += 1;
        }, 1000);
    };
}

// setup inheritance
util.inherits(Counter, EventEmitter);

var counter = new Counter();

counter.on("start", function() {
    console.log("start event");
});

counter.on("count", function(count) {
    console.log("count = " + count);
});

counter.once("count", function(count) {
    console.log("This is the first count event.");
});

counter.start();

