// const Server = require('./server');
const path = require('path');
const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser')
const port = (process.env.PORT || 3000);
const app = express();
const fs = require('fs')
const router = require('./src/router');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use(express.static('lib'));

app.get('/', function (req, res) {
  fs.readFile(`${__dirname}/index.html`, (err, file) => {
    response.send(file);
  });
})

app.use('/api', router);
app.get('/*', function (req, res) {
  fs.readFile(`${__dirname}/index.html`, (err, file) => {
    response.send(file);
  });
})

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
