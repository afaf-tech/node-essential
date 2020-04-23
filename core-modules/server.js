const net = require('net');

const connectedClient = [];
const server = net.createServer();

server.listen({
    host: 'localhost',
    port:8080,
});


server.on('connection', (client)=>{
    console.log('Client connected');
    client.write('Welcome to the server', client);
    connectedClient.push(client);
});



setInterval(()=>{
    const now = new Date().toISOString();
    connectedClient.forEach(client=>{
        client.write(now);
    });
},3000)