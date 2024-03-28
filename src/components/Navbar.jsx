import React from 'react'

export const Navbar = () => {
  return (
<nav className="bg-transparent py-4 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-black font-bold text-2xl">CLINIQ360</a>
        </div>
        <div className="hidden md:flex items-center justify-end space-x-4">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">About</a>
          <a href="#" className="text-black">Services</a>
          <a href="#" className="text-black">Contact</a>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">Login</button>
        </div>
      </div>
    </nav>
  )
}

