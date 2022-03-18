const express = require('express');
const Worker = require('../models/workerModel');
const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});
router.post('/', (req, res) => {
  res.send({ message: 'posted' });
});

router.post('/registerWorker', async (req, res) => {
  //? mongoose schema object created with values passed from the req object
  worker = new Worker(req.body);

  //? save to DB
  try {
    const savedWorker = await worker.save();

    console.log(`user ${savedWorker.name} saved with ${savedWorker._id}`);

    return res
      .status(201)
      .send({ workerId: savedWorker._id, name: savedWorker.name });
  } catch (e) {
    return res.status(400).send({ error: e, statusCode: 400 });
  }
});

//? query
router.get('/query', async (req, res) => {
  // get all the parameters from url
  let queryFilters = {};
  let { location, rate, sector, subSector, sex } = req.query;
  if (location) {
    queryFilters.place = { $regex: location, $options: 'i' };
  }
  if (rate) {
    queryFilters.hourlyRate = { $lte: rate };
  }
  if (sector) {
    queryFilters.sector = sector;
  }
  if (subSector) {
    queryFilters.subSector = subSector;
  }
  if (sex) {
    queryFilters.sex = sex;
  }

  let queryResults = await Worker.find(queryFilters);

  if (!queryResults) {
    return res.status(400).send('query results not found');
  }
  return res.status(200).send(queryResults);
});

router.get('/workers', async (req, res) => {
  try {
    const data = await Worker.find({});
    return res.status(200).send(data);
  } catch (e) {}
  return res.status(401).send(e);
});

module.exports = router;
