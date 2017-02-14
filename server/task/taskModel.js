'use strict'

module.exports = (mongoose) => {
  const Schema = mongoose.Schema
  const taskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
  })

  taskSchema.statics.cleanTasks = function(tasks) {
    if (tasks) {
      tasks.map(task => {
        if (task._id.indexOf('.') > -1) {
          delete task._id
          delete task._rev
        }
      })
    }
    return tasks
  }

  return mongoose.model('Task', taskSchema)
}
