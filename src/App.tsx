import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EstiloGlobal from "./styles/EstiloGlobal";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/:username" element={<Profile />} />
      </Routes>

      <EstiloGlobal />
    </BrowserRouter>
  );
}

export default App;
