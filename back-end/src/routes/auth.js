const express = require('express')
const { postCreateAUser } = require('../controllers/authController')
const router = express.Router()

router.get('/user', (req, res) => {
  res.send('Birds home page')
})

router.post('/user', postCreateAUser)
module.exports = router