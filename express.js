const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/horses', (req, res) => {
  res.json([{ id: 1, name: 'Horse A' }, { id: 2, name: 'Horse B' }]);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});