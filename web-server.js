const http = require('http');

const server = http.createServer(
    (request, result) => {
        const name = request.url.slice(1);
        result.writeHead(200, {'Content-type':'text/html'});
        result.end(`<h1>Hello ${name}</h1>`)
    }
);


server.listen(8080, 'localhost', function(err){
    if(err) throw err;

    console.log('port 8080')
});