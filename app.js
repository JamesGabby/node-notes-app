const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');
const { argv } = require('yargs');

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
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Remove note by title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
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
        notes.getNotes();
    }
});

yargs.parse();