require('dotenv').config();
require('./db/mongoose');
const express = require('express');
const cors = require('cors');

//? different routes files.
const workerRoutes = require('./routes/workerRoutes');

//? setup express
const app = express();
const port = process.env.PORT || 3000;

//? express configurations
app.use(cors());
app.use(express.json());

//? application logic/backend routes
app.use(workerRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
