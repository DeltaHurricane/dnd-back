function socketInit (io) {
  io.on('connection', (socket) => {
    console.log('made connection')

    socket.on('room', (room) => {
      socket.join(room)
      console.log(`joined room ${room}`)
    })

    socket.on('roll', (room, modifier, rollName, rollValue) => {
      console.log(room)
      socket.in(room).emit('doBarrelRoll', modifier, rollName, rollValue)
    })
  })
}

export { socketInit }
