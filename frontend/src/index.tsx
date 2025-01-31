import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import GameDetail from "./pages/GameDetail"; // Nova página para detalhes do jogo

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
