import React from 'react';
import { Link } from "react-router-dom";
import bestDealsImage from "../../assets/Best_deals.jpg";   


export default function BestDeal({ products }) {
    let filteredProducts = products.filter(product => product.category === 'kidwear');

    function AddToCart(product, quantity) {
        let localCart = JSON.parse(localStorage.getItem("Array")) || [];

        product["Quantity"] = quantity || 1;

        localCart.push(product);

        localStorage.setItem("Array", JSON.stringify(localCart));

        let cartCounter = parseInt(localStorage.getItem("cartCounter")) || 0;
        localStorage.setItem("cartCounter", cartCounter + 1);

        console.log("Product added to cart:", quantity, product);
    }

    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between mx-4 sm:mx-6 lg:mx-12 my-6 gap-4">
                <span className="text-xl sm:text-2xl font-semibold text-center lg:text-left">
                    Best Deals Product
                </span>
                <div className="bg-green-700 text-white px-4 py-2 rounded-md text-center text-sm sm:text-base">
                    Hurry up! Offer ends in: <b>239</b>:<b>59</b>:<b>12</b>
                </div>
            </div>

            {/* Main Section */}
            <div className="flex flex-col lg:flex-row items-start mx-4 sm:mx-6 lg:mx-12 gap-6">
                {/* Featured Image */}
                <div className="w-full lg:w-1/3">
                <img
  src={bestDealsImage}
  alt="Best Deal 1"
  className="w-full h-auto lg:h-[500px] object-cover rounded-lg shadow-lg"
/>

                </div>

                {/* Product Grid */}
                <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProducts.map((item, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg relative group overflow-hidden">
                                {/* Sale Badge */}
                                <span className="bg-green-600 text-white px-3 py-1 absolute top-3 left-3 rounded-tl-lg rounded-br-lg z-10">
                                    Sale
                                </span>

                                {/* Product Image with Hover Effects */}
                                <div className="relative">
                                    <Link to={`/product/${item._id}`}>
                                        <img
                                            src={item.imgUrl[0]}
                                            alt={item.name}
                                            className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </Link>

                                    {/* Heart Icon (Appears on Hover) */}
                                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        ❤️
                                    </button>

                                    {/* Add to Cart Button (Appears on Hover) */}
                                    <button className="absolute bottom-0 w-full bg-green-600 text-white py-2 opacity-0 group-hover:opacity-100 transition-all duration-300" onClick={(e) => {
                                        let quantity = 1;
                                        AddToCart(item, quantity);
                                    }}>
                                        Add to Cart
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>
                                    <p className="text-gray-600 text-sm mt-1">
                                        {item.desc.slice(0, 50) + "..."}
                                    </p>
                                    <div className="flex items-center mt-3">
                                        <span className="font-bold text-lg text-green-600">
                                            ₹{item.price - (item.price * 20) / 100}
                                        </span>
                                        <span className="text-gray-400 line-through ml-2 text-sm">
                                            ₹{item.price}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className={`text-xl ${i < item.star ? 'text-red-500' : 'text-gray-300'}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-gray-500 text-sm">{item.viewers} Views</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
