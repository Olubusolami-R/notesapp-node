const fs= require('fs')

// fs.writeFileSync('notes.txt','My name is Bus')
fs.appendFileSync('notes.txt','\nThis is an appended text on a new line.')