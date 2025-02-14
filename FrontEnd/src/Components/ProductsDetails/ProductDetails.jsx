import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faRotate, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import RecentlyViewed from "./RecentlyViewed";
import { Link } from 'react-router-dom'
import AddToCart from "../AddToCart";
import { useEffect } from "react";



export default function ProductDetails({ products }) {

  const { productId } = useParams();

  const product = products.find((p) => p._id == productId);

  if (!product) {
    return;
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setMainImage(product.imgUrl ? product.imgUrl[0] : "");
  }, [productId],[productId, product.imgUrl]);
 
  let [quantity,setQuantity] = useState(1);
  console.log(quantity);
  
  // State to manage the currently displayed main image
  const [mainImage, setMainImage] = useState(product.imgUrl ? product.imgUrl[0] : "");


  function AddToCart(product) {

    let localCart = JSON.parse(localStorage.getItem("Array")) || [];
    let Quantity = document.getElementById("quantity").value;
    
    product["Quantity"] = Quantity;
    
    localCart.push(product);

    localStorage.setItem("Array", JSON.stringify(localCart));

    let cartCounter = parseInt(localStorage.getItem("cartCounter")) || 0;
    localStorage.setItem("cartCounter", cartCounter + 1);

    

    console.log("Product added to cart:", Quantity, product);
}



  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="flex flex-col">
           
            <img
              src={mainImage}
              alt={product.name}
              className="rounded-lg shadow-md w-[100%] h-[400px] object-cover"
            />
            <div className="mt-4 grid grid-cols-4 gap-2">
              {/* Thumbnails */}
              {product.imgUrl.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-auto w-16 border rounded-md hover:ring-2 ring-green-500 cursor-pointer"
                  onClick={() => setMainImage(img)} // Update the main image on click
                />
              ))}
            </div>
          </div>

          {/* Right Product Info Section */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.desc}</p>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-xl text-red-600 font-semibold">
                Rs. {product.price - (product.price * 20) / 100}
              </p>
              <p className="line-through text-gray-500">Rs. {product.price}</p>
            </div>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              {[...Array(product.star)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 18z" />
                </svg>
              ))}
            </div>

            {/* Viewer Count */}
            <p className="text-gray-500">Viewers: {product.viewers}</p>

            {/* Quantity & Cart Buttons */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  defaultValue="1"
                  className="border rounded-md w-16 px-2 py-1"
                  onChange={(e)=>{setQuantity(e.target.value)}}
                />
              </div>
              <div className="space-y-2">
                <button className="w-full bg-green-500 text-white py-2 my-2 rounded-md hover:bg-green-600" onClick={() => AddToCart(product)}>
                  Add to Cart
                </button>

                <Link
                  to={`/Orders/${productId}/${quantity}`}
                  className="text-blue-500 hover:underline"
                >
                  <button className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800" onClick={()=>{quantity = document.getElementById("quantity").value}}>
                    Buy it Now
                  </button>
                </Link>
              </div>
            </div>

            <div className="my-5">
              <span className=" bg-gray-7000">Product Owner By Hias E-commerce</span>
            </div>

          </div>
        </div>

        {/* Product Description Section */}
        <div className="mt-10 border-t pt-6">
          <div className="bg-gray-100 py-10">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {/* Free Shipping */}
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faTruck} className="text-4xl text-gray-800 mb-3" />
                <h3 className="text-lg font-semibold">Free Shipping</h3>
                <p className="text-gray-500">Pair text with an icon to focus on your store's features.</p>
              </div>

              {/* Free Returns */}
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faRotate} className="text-4xl text-gray-800 mb-3" />
                <h3 className="text-lg font-semibold">Free Returns</h3>
                <p className="text-gray-500">Pair text with an icon to focus on your store's features.</p>
              </div>

              {/* Secure Payment */}
              <div className="flex flex-col items-center">
                <FontAwesomeIcon icon={faCreditCard} className="text-4xl text-gray-800 mb-3" />
                <h3 className="text-lg font-semibold">Secure Payment</h3>
                <p className="text-gray-500">Pair text with an icon to focus on your store's features.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentlyViewed products={products} category={product.category} />
      <Footer />
    </>
  );
}
