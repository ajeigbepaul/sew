import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./features/home";
import Login from "./features/auth/Login";
import Layout from "./layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
