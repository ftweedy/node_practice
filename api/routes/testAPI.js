const express = require("express")
const router = express.Router()
const db = require('./queries')

router.get("/", (req, res, next) => {
    res.send("API is working properly")
})

router.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, Postgres API, and React' })
  })
  
router.get('/users', db.getUsers)
router.get('users/:id', db.getUsersById)
router.post('/users', db.createUser)
router.put('/users/:id', db.updateUser)
router.delete('/users/:id', db.deleteUser)

module.exports = router