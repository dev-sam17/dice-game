import React from "react";
import { Routes, Route, Link } from "react-router";
import { Start } from "./routes/start.component";
import { Rooms } from "./routes/rooms.component";
import { JoinRoom } from "./routes/joinRoom.component";
import { CreateRoom } from "./routes/createRoom.component";
import { Game } from "./routes/game/diceGame.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/joinRoom" element={<JoinRoom />} />
      <Route path="/createRoom" element={<CreateRoom />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};
``;

export default App;
