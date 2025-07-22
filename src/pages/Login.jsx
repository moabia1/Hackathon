import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login API call here
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    navigate("/")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-200 via-yellow-50 to-red-200 p-4">
      <Navbar/>
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-lg shadow-xl rounded-xl p-8 w-full max-w-sm flex flex-col gap-5 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-[#3b3b3b]">
          Fokus Login
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300 transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-300 via-yellow-300 to-red-300 text-black font-semibold py-2 rounded-md hover:scale-105 transition-transform shadow-md hover:shadow-lg"
        >
          Login
        </button>
        <p className="text-xs text-center text-gray-600">
          By logging in, you agree to our Terms & Privacy Policy.
        </p>
      </form>
    </div>
  );
}
