const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
let Game = require('./Game');

let rooms = new Map();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('User Connected!!');

  /**
   * Join Room
   */
  socket.on('join room', function ({ player, roomName }) {
    let players = rooms.get(roomName);
    let game;
    console.log(`${player} Join Room : ${roomName}`);

    // Join
    socket.join(roomName);

    if (players) {
      rooms.set(roomName, [...players, ...player]);
    } else {
      rooms.set(roomName, [player]);
    }
  });

  /**
   * Chat Message
   */
  socket.on('chat message', ({ roomName, msg }) => {
    console.log(`Room Name : ${roomName}  msg : ${msg}`);
    io.sockets.in(roomName).emit('chat message', msg);
  });

  /**
   * Game Start
   */
  socket.on('game start', ({ roomName }) => {
    const players = rooms.get(roomName);
    // create Game Instance
    game = new Game(roomName, players);

    io.sockets.in(roomName).emit('new game', game.getState());
  });

  /**
   * Get Answer
   */
  socket.on('answer', ({ answer, roomName }) => {
    const isCorrect = game.checkAnswer(answer);
    const isLast = game.checkLastRound();
    const state = game.getState();

    io.sockets.in(roomName).emit('answer', { isCorrect, isLast, state});
  });

  /**
   * Next Game
   */
  socket.on('next game', ({ roomName, answer }) => {
    const state = game.nextRound();

    console.log(state);
    io.sockets.in(roomName).emit('new game', state);
  });

  socket.on('reset game', () => {
    game.initGame();
    const state = game.getState();
    
    console.log(state);
    io.sockets.in(state.roomName).emit('new game', state);
  });

  /**
   * Discoonect
   */
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('Connected at 3000');
});
