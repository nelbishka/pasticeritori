import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
    <h1 className="text-xl font-bold tracking-wide"><a href='#'>Pasticeri Tori</a></h1>
    <nav className="space-x-6 text-sm font-medium">
      <a href="#menu" className="hover:text-[#8B5E3C]">Menu</a>
      <a href="#reviews" className="hover:text-[#8B5E3C]">Reviews</a>
      <a href="#contact" className="hover:text-[#8B5E3C]">Location</a>
    </nav>
  </header>
  )
}

export default Header