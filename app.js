const express = require('express');
const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

//require routes.
const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');

//use routes.
app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);

//if the app reaches here, it means no matching route. Create new 404 error.
app.use((req, res, next) => {
  const err = new Error('Page Not Found');
  err.status = 404;
  next(err);
});

//set locals.error to err. set error status. render error view.
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
