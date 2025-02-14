import './App.css';
import { Routes, Route, Navigate } from "react-router";
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import AdminPanel from './Components/adminPanel/adminPanel';
import AdminDashboard from './Components/adminPanel/admindashboard/AdminDashboard';
import AdminProducts from './Components/adminPanel/adminproducts/AdminProducts';
import AddProductsFrom from './Components/adminPanel/adminproducts/AddProductsFrom';
import TrandingProducts from './Components/Home/TrandingProducts';
import ProductDetails from './Components/ProductsDetails/ProductDetails';
import OrderSummary from './Components/OrderSummary';
import { useEffect, useState } from 'react';
import AddToCart from './Components/AddToCart';
import CategoryPage from './Components/CategoryPage';
import AboutUs from './Components/AboutUs';
import ContectUs from './Components/ContectUs';
import Orders from './Components/adminPanel/orders/Orders';
import UserProfile from './Components/userprofile/UserProfile';


function App() {
  

  useEffect(() => {
    fetch(import.meta.env.VITE_API_KEY+"/admin/allProducts", {
      method: "POST"
    }).then(res => {
      res.json().then(data => {
        setAllProducts(data)
      }
      )
    })
  }, [])

  const [allProducts, setAllProducts] = useState([]);

  return (
    <>
      <Routes>
        <Route index element={<HomePage products={allProducts} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="Orders/:productId/:quantity" element={<OrderSummary products={allProducts} />} />

        {localStorage.getItem("isLogedIn") ? <Route path="/admin" element={<Navigate to="/admin/dashboard" />} /> : <Route path='/admin' element={<Navigate to="/Login" />} />}
        <Route path='/admin' element={<AdminPanel />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='orders' element={<Orders />} />
          <Route path='addproducts' element={<AddProductsFrom />} />
          <Route path='products/:prodid' element={<AddProductsFrom />} />
        </Route>
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/trending" element={<TrandingProducts products={allProducts} />} />
        <Route path="/product/:productId" element={<ProductDetails products={allProducts} />} />
        <Route path="/Categories" element={<CategoryPage products={allProducts} />}>
          <Route path="/Categories/:URLcategory" element={<CategoryPage products={allProducts} />} />
        </Route>
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<ContectUs />} />

        <Route path="/Contect-Us" element={<ContectUs />} />
        <Route path="/user" element={<UserProfile />} />

      </Routes>
    </>
  );
}

export default App;
