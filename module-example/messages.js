const chalk = require('chalk');

const error = (msg)=>{
    console.log(chalk.red.inverse(msg));
}


const success = (msg)=>{
    console.log(chalk.green.inverse(msg));
}

module.exports = {
    error,
    success,
}