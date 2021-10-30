const { json } = require('express');
const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
const PORT = process.env.PORT || 3001;

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
