// const fs= require('./notes.js')
const chalk = require('chalk')
const yargs=require('yargs')

//customize yargs version
yargs.version('1.1.0')


//create add command
yargs.command({
    command:'add',
    describe: 'add a new note',
    handler: function(){
        console.log('adding a new note!')
    }
})

//create remove command
yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing a note!')
    }
})

//create list command
yargs.command({
    command:'list',
    describe: 'list all notes',
    handler: function(){
        console.log('here is the list of notes!')
    }
})

//create read command
yargs.command({
    command:'read',
    describe: 'read notes',
    handler: function(){
        console.log('content of note displayed')
    }
})

console.log(yargs.argv)
