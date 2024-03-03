// loading module, part of nodeJs not javascript
const getNotes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
// import chalk from 'chalk'

console.log(getNotes())

console.log(validator.isEmail("satya@gmail.com"));
console.log(chalk.blue.italic(validator.isURL("gmail.com")))
console.log(chalk.red.bold("success!"))