const router = require('express').Router();
const path = require('path');
const {notes} = require('../db/db.json')
const fs = require('fs');
const { nanoid } = require('nanoid')

function createNewNote(body, notes) {
    console.log(notes)
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes)
    );
    return note;
}

router.get('/notes', (req, res) => {
    const result = notes;
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = nanoid(6);
    const note = createNewNote(req.body, notes);
    res.json(note);
    console.log(note)
})


module.exports = router