import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Recommended(props) {
    const [selectedCategory, setSelectedCategory] = useState('Menswear');
    
    // Filtering products based on selected category
    let filteredProducts = props.products.filter((product) => {
        return product.category === selectedCategory;
    });

    return (
        <>
            <div className="ml-5 my-12 text-3xl font-semibold">
                <p>Recommended for You</p>
            </div>

            <div className="my-6 ml-6 gap-6 text-xl sm:text-2xl flex flex-wrap">
                <span
                    className="hover:text-green-600 hover:underline cursor-pointer"
                    onClick={() => setSelectedCategory('Menswear')}
                >
                    Mens Casualwear
                </span>
                <span
                    className="hover:text-green-600 hover:underline cursor-pointer"
                    onClick={() => setSelectedCategory('Womenswear')}
                >
                    Womens Westernwear
                </span>
                <span
                    className="hover:text-green-600 hover:underline cursor-pointer"
                    onClick={() => setSelectedCategory('kidwear')}
                >
                    Kidswear
                </span>
                <span
                    className="hover:text-green-600 hover:underline cursor-pointer"
                    onClick={() => setSelectedCategory('sports')}
                >
                    Sportswear
                </span>
            </div>

            <div className="my-5 flex flex-wrap">
                {filteredProducts.map((product, i) => (
                    <div
                        key={i}
                        className="ml-[2vw] flex w-full sm:w-72 md:w-80 lg:w-[47%] bg-white rounded-lg shadow-xl h-auto my-5"
                    >
                        <div>
                            <Link to={`/product/${product._id}`}>
                            <img
                                className="w-36 h-full box-border rounded-tl-lg rounded-tr-lg"
                                src={product.imgUrl[0]}
                                alt={product.name}
                            />
                            </Link>
                        </div>
                        <div className="p-5 font-poppins">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg sm:text-xl">{product.name}</h3>
                            </div>

                            <div className="flex items-center mt-2">
                                <div>
                                    <span className="font-semibold text-lg">₹</span>
                                    <span className="font-bold text-2xl">{product.price - (product.price * 20) / 100}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400 line-through ml-2">₹{product.price}</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                                <div className="flex space-x-1">
                                    {[5, 4, 3, 2, 1].map((val) => (
                                        <label key={val}>
                                            <input type="radio" name="rating" value={product.star} className="hidden" />
                                            <span className="text-red-500 cursor-pointer text-xl">&#9733;</span>
                                        </label>
                                    ))}
                                </div>
                                <span className="text-slate-300">{product.viewers} Views</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
