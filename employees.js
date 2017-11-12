var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var db = mongoose.connection;
var dbUrl = "mongodb://jerry:cornelius@ds249575.mlab.com:49575/nex-mongo-test";

var TeamSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});
var Team = mongoose.model("Team", TeamSchema);

var EmployeeSchema = new Schema({
    name: {
        first: {
            type: String,
            required: true
        },
        last: {
            type: String,
            required: true
        }
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: "Team"
    },
    image: {
        type: String,
        default: "images/user.png"
    },
    address: {
        lines: {
            type: [String]
        },
        postal: {
            type: String
        }
    }
});
var Employee = mongoose.model("Employee", EmployeeSchema);

var insertTeams = (callback)=>{
    // callback returns an array of results
    Team.create([{
        name: "Product Development"
    }, {
        name: "Dev Ops"
    }, {
        name: "Accounting"
    }], (err, data)=>{
        if (err) {
            return callback(err);
        } else {
            console.info("Teams added.");
            callback(null, data);
        }
    });
};

var insertEmployees = (teams, callback)=>{
    // callback returns an array of results
    Employee.create([{
        name: {
            first: "John",
            last: "Adams"
        },
        team: teams[0]._id,
        address: {
            lines: ["2 Lincoln Memorial Cir NW"],
            postal: "20037"
        }
    }, {
        name: {
            first: "Thomas",
            last: "Jefferson"
        },
        team: teams[1]._id,
        address: {
            lines: ["1600 Pennsylvania Avenue", "White House"],
            postal: "20500"
        }
    }, {
        name: {
            first: "James",
            last: "Madison"
        },
        team: teams[2]._id,
        address: {
            lines: ["2 15th St.", "PO Box 8675"],
            postal: "20007"
        }
    }, {
        name: {
            first: "James",
            last: "Monroe"
        },
        team: teams[2]._id,
        address: {
            lines: ["1500 West Basin Drive", "Suite 210"],
            postal: "20242"
        }
    }], (err, data)=>{
        if (err) {
            return callback(err);
        } else {
            console.info("Employees added.");
            callback(null, data);
        }
    });
};

var retrieveEmployee = (employee, callback)=>{
    Employee.findOne({
        _id: employee._id
    }).populate("team").exec( (err, result)=>{
        if (err) {
            return callback(err);
        }
        console.log("*** Single Employee ***");
        console.dir(result);
        callback(null, result);
    });  
};

db.on("error", ()=>{
    console.log("error: communication with the database");
});

// needs option
mongoose.connect(dbUrl, {useMongoClient: true}, (err)=>{
    if (err){
        return console.log("error: can't connect - " +err);
    }
    console.log("Connected!");
    
    //var team = new Team({
    //    name: "Product Development"
    //});
    
    //team.save( (err, data)=>{
    //    if (err) {
    //        console.log(err);
    //    } else {
    //        console.dir(data);
    //    }
    //    db.close();
    //    process.exit();
    //});

    insertTeams( (err, teams)=>{
        if (err) {
            return console.error(err);
        }
        insertEmployees(teams, (err, employees)=>{
            if (err) {
                console.error(err);
            } else {
                console.info("Teams and Employees added");
            }
            
            //console.dir(employees[0]);
            retrieveEmployee(employees[0], (err, result)=>{
                if (err) {
                    console.error(err);
                } else {
                    console.info("Employee retrieved");
                }       
                db.close();
                process.exit();
            });
        });
    });
    
});

