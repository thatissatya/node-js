// loading module, part of nodeJs not javascript
const getNotes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
const { hideBin } = require('yargs/helpers')
const yargs = require('yargs') (hideBin(process.argv))


// manual parsing command
const command = process.argv[2]

// const argv = yargs(hideBin(process.argv))
//customize yargs
yargs.version("1.1.0")
//parsing arguments, hideBine is arr.slice(2)
// const args = yargs(hideBin(process.yargs)).yargs


// creating a new command using yargs
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log(chalk.yellow('adding a new note'))
    }
})

//creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function (){
        console.log(chalk.red("removing notes"))
    }
})

// creating read command.

yargs.command({
    command: "read",
    describe: "Read Note",
    handler: function (){
        console.log(chalk.purple.bold("Reading notes"))
    }
})

// creating list command

yargs.command({
    command: "list",
    describe: "List Note",
    handler: function (){
        console.log(chalk.white("Listing notes"))
    }
})

console.log(yargs)

if(command === 'add'){
    console.log(chalk.green.bold("adding notes"))
}else if(command === 'remove'){
    console.log(chalk.red.bold("removing notes"))
}