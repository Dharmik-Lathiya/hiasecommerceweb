import React from "react";
export default function Footer() {
    return (
      <footer className="bg-white text-gray-800 py-8 px-4 md:px-16 border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="font-bold text-lg">About us</h2>
            <p className="text-gray-600 mt-2">
              The exciting contemporary brand Suruchi is known for its attention to detail and premium graphics.
            </p>
            <div className="flex space-x-4 mt-3 *:text-3xl *:text-gray-600">
              <a href="#" className="text-xl"><i class="fab fa-facebook-square"></i></a>
              <a href="#" className="text-xl"><i class="fab fa-twitter-square"></i></a>
              <a href="#" className="text-xl"><i class="fab fa-instagram-square"></i></a>
              <a href="#" className="text-xl"><i class="fab fa-whatsapp-square"></i></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-lg">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">Search</a></li>
              <li><a href="#">Home page</a></li>
              <li><a href="#">All collections</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
  
          {/* Company */}
          <div>
            <h2 className="font-bold text-lg">Company</h2>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#">Shop</a></li>
              <li><a href="#">Orders</a></li>
            </ul>
          </div>
  
          {/* Newsletter */}
          <div>
            <h2 className="font-bold text-lg">Newsletter</h2>
            <div className="mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="border px-4 py-2 w-full rounded-md" 
              />
              <button className="mt-2 bg-gray-900 text-white px-4 py-2 w-full rounded-md">Subscribe</button>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2025, Created With Hias Heart ❤️ By <span className="font-bold">Code5</span></p>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <img src="https://img.icons8.com/?size=100&id=11079&format=png&color=000000" alt="Visa" className="h-6" />
            <img src="https://img.icons8.com/?size=100&id=11080&format=png&color=000000" alt="MasterCard" className="h-6" />
            <img src="https://img.icons8.com/?size=100&id=1433&format=png&color=000000" alt="Amex" className="h-6" />
            <img src="https://img.icons8.com/?size=100&id=24579&format=png&color=000000" alt="PayPal" className="h-6" />
            <img src="https://img.icons8.com/?size=100&id=9672&format=png&color=000000" alt="Discover" className="h-6" />
          </div>
        </div>
      </footer>
    );
  }
  