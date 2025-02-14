import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminSideMenu.css";
import img from "../../assets/logo.png";

export default function AdminSideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 h-full w-48 border-r text-black p-5 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0`}
      >
        {/* Logo & Toggle Button */}
        <div className="flex items-center justify-between mb-10">
          <img src={img} alt="Logo" className="h-12 w-32" />
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-6">
          <li>
            <Link to="/admin/dashboard" className="block py-2 px-4 hover:bg-green-600 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="block py-2 px-4 hover:bg-green-600 rounded">
              Products
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="block py-2 px-4 hover:bg-green-600 rounded">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/" onClick={()=>{localStorage.setItem("isAdmin",false);localStorage.setItem("isLogedIn",false);localStorage.setItem("userId","");}} className="block py-2 px-4 hover:bg-red-600 rounded">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-5 left-5 text-gray-800 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </div>
  );
}
