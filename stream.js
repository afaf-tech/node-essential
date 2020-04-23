const fs = require('fs');
const http = require('http');

const server = http.createServer(
    (req, result) => {
        const file = fs.createReadStream('./myblog.txt');
        file.pipe(result);
    }
)


server.listen(8080, 'localhost', function(err){
    if(err) throw err;

    console.log('port 8080')
});