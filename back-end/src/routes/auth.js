const express = require('express')
const { postCreateAUser, postLogin } = require('../controllers/authController')
const router = express.Router()

router.get('/user', (req, res) => {
  res.send('Birds home page')
})

router.post('/user/register', postCreateAUser)
router.post('/user/login', postLogin)
module.exports = router