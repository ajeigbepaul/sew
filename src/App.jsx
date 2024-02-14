import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./features/home";
import Login from "./features/auth/Login";
import Layout from "./layout";
import Register from "./features/auth/Register";
import Productdetails from "./features/productdetails";
import Cart from "./features/cart";
import Checkout from "./features/checkout";
import Admin from "./features/admin/home";
import AdminLayout from "./features/admin/layout";
import Upload from "./features/admin/upload";
import Analytics from "./features/admin/analytics";
import Store from "./features/admin/store";
import BannerUpload from "./features/admin/upload/bannerupload";
import AllOrders from "./features/admin/store/allorders";
import Orders from "./features/admin/home/allorders";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails" element={<Productdetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/orders" element={<Orders />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/bannerupload" element={<BannerUpload />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/store/allorders" element={<AllOrders />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
