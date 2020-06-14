const express = require('express');

const app = express();

app.use('/static', express.static('public'));

app.set('view engine', 'pug');


const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');

app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);


app.listen(3000, () => {
  console.log("listening on port 3000");
});
