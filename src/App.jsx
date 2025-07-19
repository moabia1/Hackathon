// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainRoutes from "./routes/MainRoutes";
import { div } from "framer-motion/client";

export default function App() {
  return (
    <div className="relative h-full w-full">
      <MainRoutes/>
    </div>
  );
}
