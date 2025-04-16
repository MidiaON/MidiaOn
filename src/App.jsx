
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLiderPastor from "./pages/DashboardLiderPastor.jsx";
import Login from "./pages/Login.jsx";
import Membros from "./pages/Membros.jsx";
import GerenciarEscalas from "./pages/GerenciarEscalas.jsx";
import EditarEscalas from "./pages/EditarEscalas.jsx";
import DashboardPastor from "./pages/DashboardPastor.jsx";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLiderPastor nome="Líder" />} />
        <Route path="/pastor" element={<DashboardPastor nome="Pastor" />} />
        <Route path="/membros" element={<Membros />} />
        <Route path="/gerenciar-escalas" element={<GerenciarEscalas />} />
        <Route path="/editar-escalas" element={<EditarEscalas />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
