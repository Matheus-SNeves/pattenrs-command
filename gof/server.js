const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes.js');

const app = express();
app.use(bodyParser.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});