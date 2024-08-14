import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Main from "./components/Main";
import "./App.css"

function App() {
  return (
    
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/" element={<Layout />}>
      <Route path ="/" element={<Main />} />
      </Route>
    </Routes>
    
  );
}

export default App;
