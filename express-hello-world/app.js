const express = require('express');
const chalk= require('chalk');


const app = express();

app.get('/', (req,res)=> res.send('Hello World'));
app.get('/login', (req,res)=> res.send('Login Page '));
app.get('/register', (req,res)=> res.send('register Page '));

app.listen(3000, ()=>{
    console.log(chalk.green('App Listening on port : 3000'));
})