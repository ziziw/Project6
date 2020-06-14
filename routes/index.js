const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/', (req, res) => {
  res.locals.projects = data.projects;
  res.render('index');
});

module.exports = router;
