const express = require('express');
const router = express.Router();
const data = require('../data.json');

// Render index view, set locals.projects to data.projects.
router.get('/', (req, res) => {
  res.locals.projects = data.projects;
  res.render('index');
});

module.exports = router;
