const server = require('http').createServer();

const io = require('socket.io')(server, {
    path:'/'
});

io.on('connection', (client)=>{
    client.on('sub_AA', (att_type) => {
        console.log('client is subcribing ...');
        setInterval(()=>{
            client.emit(att_type, Array.from({ length: 9 }, () => Math.floor(Math.random() * 40)));
        }, 500);
    });
});

server.listen(8000, 'localhost',() =>{
    console.log('Created');
});