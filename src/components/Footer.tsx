import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
    {/* About Section */}
    <div className="flex-1">
      <h2 className="text-xl font-semibold text-white">About Us</h2>
      <p className="mt-4 text-gray-400">
        We are dedicated to providing top-notch music education and resources
        for students of all levels. Join us to explore the art of music.
      </p>
    </div>

    {/* Links Section */}
    <div className="flex-1">
      <h2 className="text-xl font-semibold text-white">Quick Links</h2>
      <ul className="mt-4 space-y-2">
        <li><a href="#" className="hover:text-white">Home</a></li>
        <li><a href="#" className="hover:text-white">Courses</a></li>
        <li><a href="#" className="hover:text-white">Events</a></li>
        <li><a href="#" className="hover:text-white">Contact</a></li>
        <li><a href="#" className="hover:text-white">Support</a></li>
      </ul>
    </div>

    {/* Newsletter Section */}
    <div className="flex-1">
      <h2 className="text-xl font-semibold text-white">Newsletter</h2>
      <p className="mt-4 text-gray-400">
        Subscribe to get the latest news and updates.
      </p>
      <div className="mt-4 flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 rounded-l-md bg-gray-800 text-gray-300 focus:outline-none"
        />
        <button className="bg-blue-600 hover:bg-blue-500 p-2 rounded-r-md text-white">
          Subscribe
        </button>
      </div>
    </div>

    {/* Social Media Section */}
    <div className="flex-1">
      <h2 className="text-xl font-semibold text-white">Follow Us</h2>
      <div className="mt-4 flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Copyright Section */}
  <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
    © 2024 TechCanva. All rights reserved.
  </div>
</footer>

  )
}

export default Footer
