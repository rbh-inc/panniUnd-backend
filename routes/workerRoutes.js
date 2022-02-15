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

router.get('/workers', async (req, res) => {
  try {
    const data = await Worker.find({});
    return res.status(200).send(data);
  } catch (e) {}
  return res.status(401).send(e);
});

module.exports = router;
