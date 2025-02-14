import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

export default function () {

  let product = JSON.parse(localStorage.getItem("Array")) || [];
  let total = 0;
  let productId = []
  let quantity = []
  const navigate = useNavigate();
  
  product.map((product) => {
    total = (product.price * product.Quantity) + total;
    productId.push(product._id);
    quantity.push(Number(product.Quantity));
  })
  function submit(e) {
    e.preventDefault();

    let login = JSON.parse(localStorage.getItem("isLogedIn"));
    if(login===null||login===false){
    navigate("/login");
    return;
    }


    let date = new Date().toISOString().slice(0, 10)

    fetch(import.meta.env.VITE_API_KEY+"/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[3].value + " " + e.target[4].value,
        location: e.target[5].value + " " + e.target[6].value + " " + e.target[7].value + " " + e.target[8].value + " " + e.target[9].value,
        date: date,

        products: [...productId],
        quantity: [...quantity],
        userId:localStorage.getItem("userId")

      })
    }).then((res) => {
      res.json().then(data => {
        console.log(data);
      })
    })
  }

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row justify-between p-6 bg-gray-100 min-h-screen">

        <form onSubmit={submit}>
          {/* Left Section - Checkout Form */}
          <div className="w-full lg:w-full bg-white p-6 rounded-lg shadow-md">
            {/* Contact Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Contact</h2>
              <input
                type="text"
                placeholder="Email or mobile phone number"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <div className="flex items-center mt-2">
                <input type="checkbox" className="mr-2" />
                <label>Email me with news and offers</label>
              </div>
            </div>

            {/* Delivery Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Delivery</h2>
              <select className="w-full p-3 border border-gray-300 rounded-md mb-3">
                <option>India</option>
              </select>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-3 border border-gray-300 rounded-md mt-3"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="w-full p-3 border border-gray-300 rounded-md mt-3"
              />
              <div className="grid grid-cols-3 gap-3 mt-3">
                <input
                  type="text"
                  placeholder="City"
                  className="p-3 border border-gray-300 rounded-md"
                />
                <select className="p-3 border border-gray-300 rounded-md">
                  <option>Gujarat</option>
                </select>
                <input
                  type="text"
                  placeholder="PIN code"
                  className="p-3 border border-gray-300 rounded-md"
                />
              </div>
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 border border-gray-300 rounded-md mt-3"
              />
              <div className="flex items-center mt-3">
                <input type="checkbox" className="mr-2" />
                <label>Save this information for next time</label>
              </div>
            </div>

            {/* Payment Section */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Payment</h2>

              <div className="border border-gray-300 rounded-md p-4">
                <div className="flex items-center">
                  <input type="radio" className="mr-3" />
                  <span>Cash on Delivery (COD)</span>
                </div>
              </div>
            </div>

            {/* Billing Address */}

            {/* Pay Now Button */}
            <button className="w-full bg-green-600 text-white p-3 rounded-md text-lg font-semibold">
              Complete order
            </button>
          </div>
        </form>
        {/* Right Section - Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 lg:mt-0">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {product.map((product) => (
            <div>
              <div className="my-4 flex items-center space-x-4 border p-5 rounded-2xl">
                <img
                  src={product.imgUrl[0]}
                  alt="Product"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <p className="text-gray-700">{product.name}</p>
                  <p className="text-gray-500">{product.desc.slice(0, 50) + " . . ."}</p>
                </div>
                <span className="ml-auto font-semibold">{product.price} x {product.Quantity}</span>
              </div>

            </div>

          ))}

          <div className="border-t my-4"></div>

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>{total}</span>
          </div>
        </div>

      </div>
    </div>
  )
}
