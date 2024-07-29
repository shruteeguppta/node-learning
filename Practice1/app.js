//load existing core modules and use them..
const fs= require('node:fs')
fs.writeFileSync('first.text','Hello Node!!!! Lets try it out');
fs.appendFileSync('first.text',' "" Try Append :)');

//How to load another javascript util file
const util= require('./util.js')
console.log(util.myName, util.getNotes());

//Read Id property from db.Json file
const dBdata= fs.readFileSync('db.json');
const convertedData=dBdata.toString()
console.log(convertedData);
const parsedData= JSON.parse(convertedData);
console.log(parsedData.id);

//change Name and age property in json file
parsedData.name= "John Doe"
parsedData.age=34
const userJSON= JSON.stringify(parsedData)
fs.writeFileSync('db.json',userJSON)

//Installing npm i validator and then checking one of its function
const validator=require('validator')
console.log(validator.isEmail('xenia.career@gmail.com'));

//Installing npm i colors and then checking one of its function to display text in green color
const color =require('colors')
console.log(color.green('xenia.career@gmail.com'));
console.log('Hello'.blue);

//Argument passed using 'node app.json Xenia' get stored in process
const command = process.argv[2]
console.log(command);

//How to get data from command line using yargs
const yargs= require('yargs');
const notes= require('./notes.js');
yargs.command({
    command:'Add',
    describe:'Add note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'String'
        },
        body:{
            describe:'Note Body',
            demandOption:false,
            type:'String'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title,argv.body)
    }
})
yargs.command({
    command:'Remove',
    describe:'Remove note',
    handler: function(){
        console.log('Removing a Note')
    }
})
yargs.command({
    command:'List',
    describe:'Display List',
    handler: function(){
        console.log('Show all Notes')
    }
})
yargs.command({
    command:'Read',
    describe:'Read note',
    handler: function(){
        console.log('Read a note')
    }
})
console.log(yargs.argv);
