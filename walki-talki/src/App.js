import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Translate from "./pages/Translate";
import Signup from "./pages/Signup";
const App = () => {
  return (
    
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/trans" element={<Translate />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    
  );
};

export default App;
