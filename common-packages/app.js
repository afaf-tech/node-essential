const chalk = require('chalk');
const axios = require('axios');
const comannder = require('commander');

comannder
        .option('-t --type <type>', 'Lookup type') // node app -t --type {keyword}
        .parse(process.args);
axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${comannder.type}`)
    .then(result=>{
        console.log(result.data);
    })
    .catch(err=>{

    })
console.log(chalk.red.inverse('An Error has occuren atau terjadi'));
