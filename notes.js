const fs=require('fs')
const chalk=require('chalk')
const getNotes=()=>{
    return "Your notess..."
}

//add notes
const addNote = (title, body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title === title)
    if (duplicateNotes.length===0){
        notes.push({
            'title':title,
            'body':body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added"))
        console.log(notes)
    }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
    
    
}
//load notes
const loadNotes = ()=>{
    try{
        const data_buffer = fs.readFileSync('notes.json')
        const data_json = data_buffer.toString()
        return JSON.parse(data_json)
    } catch (e){
        return []
    }
    
}

//save notes
const saveNotes = (notes)=>{
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//remove a note
const removeNote = (title)=>{
    const notes=loadNotes()
    try{
        //Could have just used filter by return !== instead of ===
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

//list notes
const listNotes = ()=>{
    const notes=loadNotes()
    console.log("Your notes----")
    notes.forEach(note => {
        console.log(chalk.yellow(note.title))
    });
}

//read a note
const readNote = (title) =>{
    const notes=loadNotes()
    try{
        const note = notes.find((note)=>{
            return note.title===title
        })

        if(note){
            console.log(chalk.yellow.inverse(note.title))
            console.log(note.body)
        }
        else{
            console.log("Note not found!")
        }
    }
    catch(e){
        console.log(chalk.red.inverse("Error retrieving note."))
    }
}

module.exports = {
    'addNote':addNote,
    'getNotes':getNotes,
    'saveNotes':saveNotes,
    'removeNote':removeNote,
    'listNotes':listNotes,
    'readNote':readNote
}