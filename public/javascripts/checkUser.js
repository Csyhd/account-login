const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

function checkUser(userInfo) {
  let user = users.find((user) => {
    return user.email === userInfo.email
  })
  if (user) {
    if (user.password === userInfo.password) {
      return user.firstName
    } else {
      return 'wrongPassword'
    }
  }
  return 'NotFind'

}
module.exports = checkUser