const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 8000;
const app = express();
module.exports = app;


if (process.env.NODE_ENV === 'development') require('../secrets');


const createApp = () => {
  // static file-serving middleware
  app.use(express.static(path.join(__dirname, 'public')));

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
};

createApp(app);
