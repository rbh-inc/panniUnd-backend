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
  adharNo: {
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
  workSkill: {
    type: String,
    trim: true,
  },
  sex: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  hourlyRate: {
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
