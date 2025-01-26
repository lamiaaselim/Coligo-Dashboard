const socketIo = require('socket.io');
const AnnounceSocketHandler = require('../sockets/announce.socket');

module.exports = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
  });

  AnnounceSocketHandler(io); // Attach event handlers
  return io;
};
