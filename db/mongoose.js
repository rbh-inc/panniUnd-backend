require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://rabeeh:${process.env.MONGO_PASSWORD}@production.zrtub.mongodb.net/prod?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Mongodb Connected');
  })
  .catch((e) => {
    console.log(e);
  });
