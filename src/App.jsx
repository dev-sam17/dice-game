import React from "react";
import { Routes, Route, Link } from "react-router";
import { Layout } from "./routes/layout.component";
import { Start } from "./routes/start/start.component";
import { Rooms } from "./routes/rooms/rooms.component";
import { JoinRoom } from "./routes/joinRoom/joinRoom.component";
import { CreateRoom } from "./routes/createRoom/createRoom.component";
import { Game } from "./routes/game/diceGame.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Start />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/joinRoom" element={<JoinRoom />} />
        <Route path="/createRoom" element={<CreateRoom />} />
        <Route path="/game" element={<Game />} />
      </Route>
    </Routes>
  );
};
``;

export default App;
