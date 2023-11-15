// const fs= require('./notes.js')
const chalk = require('chalk')
const yargs=require('yargs')
const notes = require('./notes.js')

//customize yargs version
yargs.version('1.1.0')


//create add command
yargs.command({
    command:'add',
    describe: 'add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
        // console.log('Title: ' + argv.title + '\nbody: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing a note!')
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe: 'list all notes',
    handler(){
        console.log('here is the list of notes!')
    }
})

//create read command
yargs.command({
    command:'read',
    describe: 'read notes',
    handler(){
        console.log('Title: ' + argv.title)
    }
})

// console.log(yargs.argv)
//instead use the command below to ensure things work as expected

yargs.parse()
