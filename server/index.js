const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./modules/auth/auth.route')
const post = require('./modules/post/post.route')
const search = require('./modules/search/search.route')
require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(bodyParser.json());
app.use("/upload/avatars", express.static("upload/avatars"));
app.use("/upload/posts", express.static("upload/posts"));

const db = process.env.DATABASE;// DB Config

mongoose // Connect to MongoDB
    .connect(
        db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
global.isLog = false;


app.use(cors());
app.use('/auth', auth);
app.use('/post', post);
app.use('/search', search)


io.on('connection', (socket) => {
    console.log('conectttt', socket.id)

    socket.on('join', ({name, room}) =>{
      console.log(name, room);
    })

    socket.on('sendMessage', ({name, message}, callback) => {
      //const user = getUser(socket.id);
      console.log('sendddddd', name, message);
      socket.emit('message', { name, text: message });

      callback();
  });

    socket.on("disconnect", () =>{
        console.log("Dissconnet");
    })
})


const port = process.env.PORT;
server.listen(port, () => console.log(`Server up and running on: ${port} !`));