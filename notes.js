const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    const notes = loadNotes();
    notes.map((note) => console.log(note.title));
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNote = notes.find((note) => note.title === title);
    if (!duplicatedNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('That title already exists!'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const wasFound = notes.find((note) => title === note.title);
    wasFound ? console.log(chalk.inverse(wasFound.title) + '\n' + wasFound.body) 
        : console.log(chalk.red('Note not found.'));
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); 
    } catch (error) {
        return [];
    }   
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    notes.length > notesToKeep.length ? 
        console.log(chalk.green('Note removed!')) 
    : 
        console.log(chalk.red('Note not found!'));
    saveNotes(notesToKeep);
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    readNote
}