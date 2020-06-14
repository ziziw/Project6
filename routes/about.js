const express = require('express');
const router = express.Router();

// Render about view. 
router.get('/', (req, res) => {
  res.render('about');
});

module.exports = router;
