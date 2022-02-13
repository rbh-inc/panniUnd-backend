const mongoose = require('mongoose');

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  dpUrl: {
    type: String,
    required: true,
  },
  adhar: {
    type: Number,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  sector: {
    type: String,
    trim: true,
    required: true,
  },
  subSector: {
    type: String,
    trim: true,
    required: true,
  },
  sex: {
    type: String,
    trim: true,
    required: true,
  },
  hourlyCharge: {
    type: Number,
  },
  place: {
    type: String,
    trim: true,
    required: true,
  },
  state: {
    type: String,
    trim: true,
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Worker', workerSchema);
