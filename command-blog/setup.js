const config = require('./config');
const chalk = require('chalk');
const sqllite3 = require('sqlite3');

const db = new sqllite3.Database(config.databaseName);

db.serialize(()=>{

    const stmt = `CREATE TABLE ${config.tableName} (id INTEGER PRIMARY KEY
        AUTOINCREMENT, title TEXT, date TEXT, author TEXT, post TEXT)`;
    db.run(stmt, (err)=>{
        if(err){
            console.log(chalk.red('Error creating DB. ', err));
        }else{
            console.log(chalk.green('DB created OK. '));
        }
    })
})