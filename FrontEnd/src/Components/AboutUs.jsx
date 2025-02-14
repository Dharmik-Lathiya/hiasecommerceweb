import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck, faRotate, faCreditCard } from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
  <>
    <Header/>
    <div className="w-full">
      <div className="container">
        {/* Title */}
        <div className='bg-gradient-to-b from-green-100 to-blue-100 py-10'>
        <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
        <p className="text-center text-gray-500 mt-2">Home / About Us</p>
        </div>
        {/* Founder Section */}
        <div className="mt-10  mx-auto  bg-white rounded-lg shadow-lg p-6 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-2/3">
            <h3 className="text-xl font-bold text-gray-800">Dharmik Lathiya & Shaktisinh Jadeja</h3>
            <p className="text-gray-500">Founder Hias E-commerce</p>
            <p className="mt-4 text-gray-600">
              Hias E-Commerce is a cutting-edge platform that specializes in providing high-quality
              products imported from China. The platform caters to both wholesalers and retailers, bridging the gap
              between manufacturers and businesses or end-users.
            </p>
          </div>
          <div className="lg:w-1/3 flex items-center justify-center mt-6 lg:mt-0">
            <img src="/founder.jpg" alt="Founder" className="w-48 h-48 rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mx-10">
          <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">600</h3>
            <p>Happy Clients</p>
          </div>
          <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">1000</h3>
            <p>Total Products</p>
          </div>
          <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">50</h3>
            <p>Team Members</p>
          </div>
          <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">200</h3>
            <p>Monthly Orders</p>
          </div>
        </div>

        {/* Best Product Section */}
        <div className="mt-10 bg-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/3 flex items-center justify-center">
            <img src="/best-product.jpg" alt="Best Product" className="w-64 h-64 rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-2/3 mt-6 lg:mt-0">
            <h3 className="text-xl font-bold text-gray-800">Our Best Product</h3>
            <p className="mt-4 text-gray-600">
              Introducing our best-selling Smart Watch, featuring a sleek design and advanced technology.
              With its intuitive interface, stay connected and organized on-the-go. Monitor fitness goals,
              track daily activity, and receive notifications right on your wrist.
            </p>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-all">
              Explore More →
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className=" pt-6">
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
      
    <Footer/>
    </>
  );
}
