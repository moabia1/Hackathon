// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainRoutes from "./routes/MainRoutes";

export default function App() {
  return (
    <MainRoutes/>
  );
}
