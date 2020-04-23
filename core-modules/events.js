/* const events = require('events');

let usersLoggedIn = 0;


const eventEMitter = new events.EventEmitter();


eventEMitter.on('userLoggedIn',()=>{
    usersLoggedIn+=1;
    console.log(`there are ${usersLoggedIn} users Logged in`);
    
});


eventEMitter.emit('userLoggedIn') */

const fs = require('fs');

const watcher = fs.watch('events.js');

watcher.on('change', function(){
    console.log('File events has changed');
});
