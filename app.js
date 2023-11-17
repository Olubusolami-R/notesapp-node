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
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create read command
yargs.command({
    command:'read',
    describe: 'read notes',
    handler(argv){
        notes.readNote(argv.title)
    }
})

//create list command
yargs.command({
    command:'list',
    describe: 'list notes',
    handler(){
        notes.listNotes()
    }
})
// console.log(yargs.argv)
//instead use the command below to ensure things work as expected

yargs.parse()
