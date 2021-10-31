const router = require('express').Router();
const path = require('path');
const {notes}= require('../db/db.json')

router.get('/notes', (req, res) => {
    const result = notes;
    if (result) {
      res.json(result);
    } else {
      res.sendStatus(404);
    }
  });

module.exports = router