import { lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./features/home";
import Login from "./features/auth/Login";
import Layout from "./layout";
import Register from "./features/auth/Register";
import Productdetails from "./features/productdetails";
import Cart from "./features/cart";
import Checkout from "./features/checkout";
// const Login = lazy(() => import("./features/auth/Login"));
// const Register = lazy(() => import("./features/auth/Register"));
// const Productdetails = lazy(() => import("./features/productdetails"));
// const Home = lazy(() => import("./features/home"));
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/productdetails" element={<Productdetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
