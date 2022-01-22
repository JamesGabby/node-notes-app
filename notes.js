const fs = require('fs');

const getNotes = () => {
    return 'This is a note...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter((note) => {
        return note.title === title;
    });
        
    if (duplicatedNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('That title already exists!');
    }
    
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

module.exports = {
    getNotes,
    addNote
}