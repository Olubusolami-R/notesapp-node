const fs=require('fs')
const chalk=require('chalk')
const getNotes= function (){
    return "Your notess..."
}

const addNote = function(title, body){
    const notes=loadNotes()
    const duplicateNotes=notes.filter(function(note){
        return note.title === title
    })
    if (duplicateNotes.length===0){
        notes.push({
            'title':title,
            'body':body
        })
        saveNotes(notes)
        console.log("New note added")
        console.log(notes)
    }
    else{
        console.log('Note title taken!')
    }
    
    
}

const loadNotes = function(){
    try{
        const data_buffer = fs.readFileSync('notes.json')
        const data_json = data_buffer.toString()
        return JSON.parse(data_json)
    } catch (e){
        return []
    }
    
}

const saveNotes = function(notes){
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function(title){
    const notes=loadNotes()
    try{
        for(let i=0; i<notes.length; i++){
            if(notes[i].title===title){
                notes.splice(i,1)
                console.log(notes)
                saveNotes(notes)
                console.log(chalk.green.inverse("Note removed"))
                break
            }
            if(i===notes.length-1){
                console.log(chalk.red.inverse("Note does not exist"))
            }
        }
        
    }catch (e){
        console.log(chalk.red.inverse("removal unsuccessful!"))
    }
}

module.exports = {
    'addNote':addNote,
    'getNotes':getNotes,
    'saveNotes':saveNotes,
    'removeNote':removeNote
}