// import express from 'express'
// const server = express()
var express = require ("express")
var router = express.Router()

router.get("/", (req, res) => {
    res.send("API is working properly")
})

module.exports = router