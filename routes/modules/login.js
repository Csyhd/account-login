const express = require('express')
const router = express.Router()
const checkUser = require('../../public/javascripts/checkUser')

router.post('/', (req, res) => {
  let userInfo = req.body
  const userName = checkUser(userInfo)
  switch (userName) {
    case 'NotFind':
      res.render('index', { userNotFind: '找不到使用者' })
      break
    case 'wrongPassword':
      res.render('index', { passwordWrong: '密碼錯誤' })
      break
    default:
      res.render('login', { userName })
      break
  }
})

module.exports = router