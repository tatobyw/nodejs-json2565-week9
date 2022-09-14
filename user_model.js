const {readFileSync} = require('fs')

const loadUser = () => JSON.parse(readFileSync('users.json'))

module.exports = {loadUser}