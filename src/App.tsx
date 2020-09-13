import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EstiloGlobal from "./styles/EstiloGlobal";
import Profile from "./pages/Profile";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>

      <EstiloGlobal />
    </BrowserRouter>
  );
}

export default App;
