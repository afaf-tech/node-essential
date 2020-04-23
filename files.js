const fs = require('fs');


// const data = fs.readFileSync('system.js');
// console.log(data.toString());


// fs.writeFileSync('data.txt', 'HEllo World');
// fs.appendFileSync('data.txt', '\n Appended message');
// fs.copyFileSync('system.js', 'data.txt')

// fs.renameSync('data.txt','datarename.txt')

//delete file
// fs.unlink('datarename.txt');


// const dir = fs.readdirSync(__dirname); //return array of filename

// console.log(dir);
// make directory
// fs.mkdirSync('file-system')


// move file to a directory 
// fs.renameSync('datarename.txt', 'file-system/datarename.txt');


// watch file actifity
fs.watchFile('file-system/datarename.txt', ()=>{
    console.log('Data file was changed.');
    
});