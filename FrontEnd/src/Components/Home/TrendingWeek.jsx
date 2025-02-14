import React from "react";
import Slider from "react-slick";

function SwipeToSlide({ products }) {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    centerMode: false, // Disable centering, this might help avoid layout issues
    responsive: [
      {
        breakpoint: 2000,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1400,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 400,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  function AddToCart(product, quantity) {
    let localCart = JSON.parse(localStorage.getItem("Array")) || [];

    product["Quantity"] = quantity || 1;

    localCart.push(product);

    localStorage.setItem("Array", JSON.stringify(localCart));

    let cartCounter = parseInt(localStorage.getItem("cartCounter")) || 0;
    localStorage.setItem("cartCounter", cartCounter + 1);

    console.log("Product added to cart:", quantity, product);
}

  // Filter products based on category
  let filteredProducts = products.filter(
    (product) => product.category === "Womenswear"
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="w-full text-center my-12 text-2xl font-semibold text-gray-500">
        No products found for this category.
      </div>
    );
  }

  return (
    <>
      <div className="w-full text-center my-12 text-3xl font-semibold">
        <p>Trending This Week</p>
      </div>
      <div className="slider-container px-4">
        <Slider {...settings}>
          {filteredProducts.map((product, i) => (
            <div key={i} className="px-2">
              <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden p-4">
                {/* Sale Badge */}
                <span className="bg-green-600 px-3 py-1 absolute m-3 text-white rounded-tl-lg rounded-br-lg text-xs">
                  Sale
                </span>

                {/* Product Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-48 md:h-52 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    src={product.imgUrl[0]}
                    alt={product.name}
                  />

                  {/* Heart Icon */}
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                    ❤️
                  </button>

                  {/* Add to Cart Button */}
                  <button className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-green-600 text-white px-6 py-2 transition-all duration-300 shadow-lg" onClick={(e) => {
                                        let quantity = 1;
                                        AddToCart(product, quantity);
                                    }}>
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="mt-4 px-2 text-center">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.desc.slice(0, 50)}...
                  </p>
                  <h5 className="mt-2 font-semibold text-gray-700">Brand: Hias</h5>

                  {/* Price Section */}
                  <div className="flex items-center justify-center mt-2">
                    <div>
                      <span className="font-semibold text-lg">₹</span>
                      <span className="font-bold text-2xl">
                        {product.price - (product.price * 20) / 100}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 line-through ml-2">
                        ₹{product.price}
                      </span>
                    </div>
                  </div>

                  {/* Rating & Stock */}
                  <div className="flex space-x-1 mt-2 items-center justify-center">
                    {[5, 4, 3, 2, 1].map((val) => (
                      <span
                        key={val}
                        className={`text-lg ${
                          val <= product.star ? "text-yellow-500" : "text-gray-300"
                        }`}
                      >
                        &#9733;
                      </span>
                    ))}
                    <span className="text-gray-500 ml-auto text-xs">
                      {product.stock} Available
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

export default SwipeToSlide;
