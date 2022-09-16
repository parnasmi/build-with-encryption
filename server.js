const express = require('express');
const history = require('express-history-api-fallback');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve('build')));
app.use(history('index.html', { root: 'build' }));
app.listen(PORT, () => {
  console.log('listening on', PORT);
});
