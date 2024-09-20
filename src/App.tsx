import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Room from "./components/Room";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/room`} element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
