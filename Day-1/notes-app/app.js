// loading module, part of nodeJs not javascript
const getNotes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')

const command = process.argv[2]

if(command === 'add'){
    console.log(chalk.green.bold("adding notes"))
}else if(command === 'remove'){
    console.log(chalk.red.bold("removing notes"))
}