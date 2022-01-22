const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: function() {
        console.log('Removing note...');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read the note',
    handler: () => {
        console.log('reading the note...');
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: () => {
        console.log('Listing all notes...');
    }
});

yargs.parse();