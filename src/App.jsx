// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLiderPastor from "./pages/DashboardLiderPastor";
import DashboardPastor from "./pages/DashboardPastor";
import Membros from "./pages/Membros";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard-lider" element={<DashboardLiderPastor />} />
        <Route path="/dashboard-pastor" element={<DashboardPastor />} />
        <Route path="/membros" element={<Membros />} />
      </Routes>
    </Router>
  );
}

export default App;
