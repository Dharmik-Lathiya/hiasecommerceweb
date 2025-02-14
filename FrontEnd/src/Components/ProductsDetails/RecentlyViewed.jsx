import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";



export default function RecentlyViewed({products,category}) {

    function AddToCart(product, quantity) {
        let localCart = JSON.parse(localStorage.getItem("Array")) || [];
    
        product["Quantity"] = quantity || 1;
    
        localCart.push(product);
    
        localStorage.setItem("Array", JSON.stringify(localCart));
    
        let cartCounter = parseInt(localStorage.getItem("cartCounter")) || 0;
        localStorage.setItem("cartCounter", cartCounter + 1);
    
        console.log("Product added to cart:", quantity, product);
    }
    
    let filteredProducts = products.filter((product)=>{
        return product.category == category ? product : 0;
    })

    
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 4,
        swipeToSlide: true,
    };

    return (
        <>
            <div className="w-full text-center my-12 text-3xl font-semibold">
                <p>Recently Viewd</p>
            </div>
            <div className="slider-container my-10">
                <Slider {...settings}>
                    {filteredProducts.map((product, i) => (
                        <div key={i} className="px-2">
                            <div className="group relative bg-white rounded-lg border overflow-hidden">
                                <span className="bg-green-600 px-4 py-2 absolute m-3 text-white rounded-tl-lg rounded-br-lg">
                                    Sale
                                </span>
                                <div className="relative overflow-hidden">
                                    <Link
                                        to={`/product/${product._id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        <img
                                            className="w-full h-52 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                                            src={product.imgUrl[0]}
                                            alt={product.name}
                                        />
                                    </Link>
                                    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
                                        ❤️
                                    </button>
                                    <button className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-green-600 text-white px-6 py-2 transition-all duration-300 shadow-lg" onClick={(e) => {
                                        let quantity = 1;
                                        AddToCart(product, quantity);
                                    }}>
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="mt-4 px-4">
                                    <h3 className="font-semibold text-lg">{product.name}</h3>
                                    <p className="mt-2 text-sm text-gray-600">{product.desc.slice(0,50)+" . . ."}</p>
                                    <h5 className="mt-2 font-semibold">Hias</h5>
                                    <div className="flex items-center mt-2">
                                        <div>
                                            <span className="font-semibold text-lg">₹</span>
                                            <span className="font-bold text-2xl">{product.price - (product.price * 20)/100 }</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-400 line-through ml-2">
                                                ₹{product.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex space-x-1 mt-2 items-center">
                                        {[5, 4, 3, 2, 1].map((val) => (
                                            <span
                                                key={val}
                                                className={`text-xl ${val <= product.star ? "text-red-500" : "text-gray-300"
                                                    }`}
                                            >
                                                &#9733;
                                            </span>
                                        ))}
                                        <span className="text-gray-500 ml-auto">
                                            {product.stock} Views
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
