import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TrandingProducts(props) {
  const [selectedCategory, setSelectedCategory] = useState("Menswear");

  let filteredProducts = props.products.filter(
    (product) => product.category === selectedCategory
  );

  
  function AddToCart(product, quantity) {
    let localCart = JSON.parse(localStorage.getItem("Array")) || [];
    
    product["Quantity"] = quantity || 1;  // Default to 1 if no value is provided
    
    localCart.push(product);
    
    localStorage.setItem("Array", JSON.stringify(localCart));
    
    let cartCounter = parseInt(localStorage.getItem("cartCounter")) || 0;
    localStorage.setItem("cartCounter", cartCounter + 1);
    
    console.log("Product added to cart:", quantity, product);
}


  return (
    <>
      <h2 className="mt-10 text-center md:text-left lg:ml-5 text-3xl md:text-4xl font-semibold">
        Trending Products
      </h2>

      {/* Category Selection */}
      <div className="my-6 mx-4 md:mx-6 grid grid-cols-2 sm:flex flex-wrap gap-4 text-lg md:text-2xl">
        <span
          className={`cursor-pointer ${
            selectedCategory === "Menswear" ? "text-green-600 font-semibold underline" : "hover:text-green-600 hover:underline"
          }`}
          onClick={() => setSelectedCategory("Menswear")}
        >
          Mens Casualwear
        </span>
        <span
          className={`cursor-pointer ${
            selectedCategory === "Womenswear" ? "text-green-600 font-semibold underline" : "hover:text-green-600 hover:underline"
          }`}
          onClick={() => setSelectedCategory("Womenswear")}
        >
          Womens Westernwear
        </span>
        <span
          className={`cursor-pointer ${
            selectedCategory === "kidwear" ? "text-green-600 font-semibold underline" : "hover:text-green-600 hover:underline"
          }`}
          onClick={() => setSelectedCategory("kidwear")}
        >
          Kidswaer
        </span>
        <span
          className={`cursor-pointer ${
            selectedCategory === "sports" ? "text-green-600 font-semibold underline" : "hover:text-green-600 hover:underline"
          }`}
          onClick={() => setSelectedCategory("sports")}
        >
          Sportswear
        </span>
      </div>

      {/* Products Grid */}
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-4">
        {filteredProducts.map((product, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden group relative transition-all duration-300"
          >
            {/* Sale Badge */}
            <span className="bg-green-600 px-3 py-1 absolute top-3 left-3 text-white text-sm rounded-tl-lg rounded-br-lg">
              Sale
            </span>

            {/* Product Image */}
            <div className="relative box-border">
              <Link to={`/product/${product._id}`}>
                <img
                  className="w-full h-52 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                  src={product.imgUrl[0]}
                  alt={product.name}
                />
              </Link>

              {/* Add to Cart & Like Button on Hover */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                ❤️
              </button>

              <button className="absolute bottom-0 w-full bg-green-600 text-white py-2 opacity-0 group-hover:opacity-100 transition-all duration-300"  onClick={(e) => {
    let quantity = 1;
    AddToCart(product, quantity);
  }}>
                Add to Cart
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
                {product.desc.slice(0, 50) + "..."}
              </p>

              <div className="flex justify-between items-center mt-3">
                <h5 className="text-sm text-gray-600">Hias</h5>
                <span className="text-sm text-slate-400">Stock: {product.stock}</span>
              </div>

              {/* Price Section */}
              <div className="flex items-center mt-2">
                <span className="font-bold text-xl text-green-600">
                  ₹{product.price - (product.price * 20) / 100}
                </span>
                <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
              </div>

              {/* Star Rating */}
              <div className="flex space-x-1 mt-2">
                {[5, 4, 3, 2, 1].map((val) => (
                  <span
                    key={val}
                    className={`text-xl ${
                      val <= product.star ? "text-red-500" : "text-gray-300"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
