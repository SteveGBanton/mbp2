const express = require('express');

const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(allowCrossDomain);
app.use('/assets', express.static('assets'));

const port = process.env.PORT || 1250;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${port}...`);
});
