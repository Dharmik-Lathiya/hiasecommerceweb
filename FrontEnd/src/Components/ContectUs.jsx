import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function ContectUs() {
  return (
    <>
        <Header/> 
        <div className='bg-gradient-to-b from-green-100 to-blue-100 py-10'>
        <h2 className="text-3xl font-bold text-center text-gray-800">Contect Us</h2>
        <p className="text-center text-gray-500 mt-2">Home / Contect Us</p>
        </div>
        
        <div className="bg-gray-100 py-10 px-4 md:px-20">
      <h2 className="text-center text-3xl font-semibold mb-8">Get in touch</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border p-3 rounded w-full" />
              <input type="email" placeholder="Email" className="border p-3 rounded w-full" />
            </div>
            <input type="tel" placeholder="Phone number" className="border p-3 rounded w-full" />
            <textarea placeholder="Comment" className="border p-3 rounded w-full h-28"></textarea>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Send</button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-600">hiascommerceid@gmail.com</p>
          </div>
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600">The Galleria, G-303, near Anupam Business Hub, Yogi Chowk Ground, Chikuwadi, Nana Varachha, Surat, Gujarat 395010</p>
          </div>
          <div>
            <p className="font-medium">Follow us</p>
            <div className="flex space-x-3">
              <span className="text-gray-600">🔗</span>
              <span className="text-gray-600">🔗</span>
              <span className="text-gray-600">🔗</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mt-10">
        <iframe
          className="w-full h-80 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236295.21073169226!2d70.65647874048355!3d22.273721551410432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1738251918710!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <Footer/>

    </>
  )
}
