

const serverSocket =  (io) => {
    io.on('connection', (socket) => {

        // join room
        socket.on('join', (data, callback) => {
            socket.join(data.roomId);
            io.to(data.roomId).emit('roomData', 'joineddd');
            console.log('rommmmmm',io.sockets.adapter.rooms)
            callback();
        });
        

        // nhận tin nhắn từ client
        socket.on('sendMessage', (data, callback) => {
            console.log('sendddddd', data, socket.id);
             io.to(data.roomId).emit('message', { name: data.userId, text: data.message });
          //socket.broadcast.emit('message', { name: data.userId, text: data.message });
            callback();        
        });
        

        socket.on("disconnect", () => {
        
            console.log("Dissconnet");
        })
    })

}

module.exports = {
    serverSocket,
}