const config = require('./config');
const chalk = require('chalk');
const sqllite3 = require('sqlite3').verbose();


const db = new sqllite3.Database(config.databaseName);

db.serialize(()=>{
    const stmt = `SELECT title, date, author, post FROM ${config.tableName}`;
    db.each(stmt, (err, row)=>{
        if(err){
            console.log(chalk.red(`Problem reading row data.`));
        }else{
            const {title, date, author, post} = row;
            console.log('Title  : ' + title);
            console.log('Date : '+date);
            console.log('Author : ' + author);
            console.log('Post : '+post);
        };
    });
    db.close();
})