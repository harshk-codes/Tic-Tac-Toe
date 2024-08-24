import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: ":http://localhost:5173/",
});

const allUsers = {};
const joinCodes = {};

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected`);
  
  socket.on("request_to_join", (data) => {
    const { joinCode, username } = data;
    const currentUser = allUsers[socket.id];
    currentUser.username = username;
    currentUser.joinCode = joinCode;
    
    console.log(`User ${username} joined with code ${joinCode}`);
    
    if (!joinCodes[joinCode]) {
      joinCodes[joinCode] = [];
    }
    
    joinCodes[joinCode].push(currentUser);
    
    console.log(`Players with join code ${joinCode}:`, joinCodes[joinCode].map(p => p.username));
    
    if (joinCodes[joinCode].length === 2) {
      const players = joinCodes[joinCode];
      console.log("Both players have joined, emitting start_game to both players");
      players.forEach((player) => {
        player.socket.emit("start_game", { players: players.map(p => p.username) });
      });
      delete joinCodes[joinCode];
    } else {
      socket.emit("waiting_for_player");
    }
  });

  socket.on("disconnect", () => {
    const currentUser = allUsers[socket.id];
    if (currentUser && currentUser.joinCode) {
      const joinCodeUsers = joinCodes[currentUser.joinCode];
      if (joinCodeUsers) {
        joinCodes[currentUser.joinCode] = joinCodeUsers.filter(user => user.socket.id !== socket.id);
        if (joinCodes[currentUser.joinCode].length === 0) {
          delete joinCodes[currentUser.joinCode];
        }
      }
    }
    
    delete allUsers[socket.id];
    console.log(`User ${currentUser?.username} disconnected`);
  });
  });

httpServer.listen(3500);
