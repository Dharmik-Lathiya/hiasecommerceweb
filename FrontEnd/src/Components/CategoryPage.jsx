import React from 'react';
import Header from './Header.jsx';
import { Link,useParams  } from 'react-router-dom';
import Footer from './Footer.jsx';
import { useEffect } from 'react';

export default function CategoryPage({ products }) {


  const { URLcategory } = useParams();
  console.log(URLcategory);

  let filteredProducts = products;
  if(URLcategory){
        filteredProducts =products.filter((product) => {
        return product.category === URLcategory ? product : 0;
    });
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  });

  return (
    <>
      <Header />
      <div className="pl-10 mx-[1%] py-8 h-auto w-auto my-5 bg-slate-200 rounded-lg">
        <p className='font-semibold text-2xl'>{URLcategory ? URLcategory : 'Best Deals'}</p>
        <p className='mt-2 '><Link to="/" className='font-medium'>Home </Link>/<Link to="#">{URLcategory ? URLcategory : 'ALL Products'}</Link></p>
      </div>

      <div className="container mx-auto px-4 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product, i) => (
            <div key={i} className="w-full">
              <div className="group relative bg-white rounded-lg shadow-2xl overflow-hidden">
                {/* Sale Badge */}
                <span className="bg-green-600 z-10 px-4 py-2 absolute m-3 text-white rounded-tl-lg rounded-br-lg">
                  Sale
                </span>

                {/* Product Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-52 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    src={product.imgUrl[0]}
                    alt={product.name}
                  />

                  {/* Heart Icon */}
                  <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-x-6 group-hover:translate-x-0 transition-all duration-300">
                    ❤️
                  </button>

                  <button className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-green-600 text-white px-6 py-2 transition-all duration-300 shadow-lg">
                    Add to Cart
                  </button>
                </div>

                {/* Product Info */}
                <div className="mt-4 px-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{product.desc.slice(0, 50) + " . . ."}</p>
                  <h5 className="mt-2 font-semibold">Hias</h5>
                  <div className="flex items-center mt-2">
                    <div>
                      <span className="font-semibold text-lg">₹</span>
                      <span className="font-bold text-2xl">{product.price - (product.price * 20) / 100}</span>
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
                        className={`text-xl ${
                          val <= product.star ? "text-red-500" : "text-gray-300"
                        }`}
                      >
                        &#9733;
                      </span>
                    ))}
                    <span className="text-gray-500 ml-auto">
                      {product.stock} Item Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}