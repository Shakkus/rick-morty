const express = require('express');
const server = express();
const PORT = 3001

server.listen(PORT,() => {
    console.log('Server raosed in port: '+PORT);
})