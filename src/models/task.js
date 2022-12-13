const mongoose = require('mongoose');
const { Schema, model } = mongoose;

//Task Schema
const tasksSchema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})


// Task Model
const Task = model('Task', tasksSchema);


module.exports = Task;