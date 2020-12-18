const express = require('express')
const router = express.Router()
const checkUser = require('../../public/javascripts/checkUser')

router.post('/', (req, res) => {
  let userInfo = req.body
  const userName = checkUser(userInfo)
  res.render('login', { userName })
})

module.exports = router