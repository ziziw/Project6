const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.set(express.static(path.join(__dirname, 'public')));

const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');

app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);


app.listen(3000, () => {
  console.log("listening on port 3000");
});
