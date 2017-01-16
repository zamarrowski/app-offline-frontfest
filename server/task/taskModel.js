'use strict'

module.exports = (mongoose) => {
  const Schema = mongoose.Schema
  const taskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true }
  })

  return mongoose.model('Task', taskSchema)
}
