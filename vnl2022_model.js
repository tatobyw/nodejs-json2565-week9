const {readFileSync} = require('fs')

const loadVnl2022 = () => JSON.parse(readFileSync('data.json'))

module.exports = {loadVnl2022}