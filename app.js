const validator = require('validator')
const yargs = require('yargs')
const Notes = require('./notes.js')
const chalk = require('chalk')

//Customize Yargs Version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
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
        Notes.addNote(argv.title,argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Notes.rmNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        Notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a notes',
    handler(argv){
        Notes.readNote(argv.title)
    }
})

//causes the yargs commands to be parsed. If this command is missing then the commands are not executed
//if this command is missing then the console.log line was causing the yargs commands to be parsed.
yargs.parse()

//console.log(yargs.argv)