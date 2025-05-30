const express = require('express');
const cors = require('cors');
const horseRoutes = require('./routes/horseRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', horseRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});