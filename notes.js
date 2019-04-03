const fs = require('fs')
const chalk = require('chalk')

const rmNote = (title) => {
    const notes = loadNotes()
    
    const NotesToKeep = notes.filter((note) => note.title != title)

    if (NotesToKeep < notes){
        saveNotes(NotesToKeep)
        console.log(chalk.red('Title: '+ title + ' removed!'))
    }else{
        console.log(chalk.red('Title: '+title+' did not exist!'))
    }
}

const addNote = (title,body) => {
    const notes = loadNotes()
    //check for duplicate notes
   
    const uplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
            notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log(chalk.yellow('Title already exists!'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }    
}

const listNotes = () => {
    const Notes = loadNotes()
    console.log(chalk.inverse('Your Notes...'))
    Notes.forEach((note) => {
        console.log(chalk.green('Title: ' + note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
   
    const note = notes.find((n)=> n.title === title)
    
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)   
    }else{
        console.log(chalk.red('No note found'))
    }
    
}

module.exports = {
    addNote: addNote,
    rmNote: rmNote,
    listNotes: listNotes,
    readNote: readNote
}