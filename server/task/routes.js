'use strict'

module.exports = (express, taskModel) => {

  let router = express.Router()

  router.get('/', (req, res, next) => {
    taskModel.find({}, {__v: 0})
    .then(tasks => res.json(tasks))
    .catch(err => next(err))
  })

  router.get('/:id', (req, res, next) => {
    taskModel.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => next(err))
  })

  router.post('/', (req, res, next) => {
    let newTask = new taskModel({
      name: req.body.name,
      description: req.body.description,
      completed: false
    })

    newTask.save()
    .then(doc => res.json(doc))
    .catch(err => next(err))
  })

  router.put('/:id', (req, res, next) => {
    taskModel.findById(req.params.id).then(task => {
      if (task) {
        task.name = req.body.name ? req.body.name : task.name
        task.description = req.body.description ? req.body.description : task.description
        task.completed = req.body.completed != null ? req.body.completed : task.completed
        task.save()
        .then(task => res.json(task))
        .catch(err => next(err))
      } else {
        next(new Error('Task not found'))
      }
    })
    .catch(err => next(err))
  })

  router.delete('/:id', (req, res, next) => {
    taskModel.remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => next(err))
  })

  return router

}
