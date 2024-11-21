import React, { useState, useEffect } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-red-600 text-2xl font-bold">Streaming HUB</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#home" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                <a href="#serie-tv" className="text-gray-300 hover:text-white px-3 py-2">Serie TV</a>
                <a href="#film" className="text-gray-300 hover:text-white px-3 py-2">Film</a>
                <a href="#nuovi-e-popolari" className="text-gray-300 hover:text-white px-3 py-2">Nuovi e popolari</a>
                <a href="#preferiti" className="text-gray-300 hover:text-white px-3 py-2">Preferiti</a>
                <a href="#animazione" className="text-gray-300 hover:text-white px-3 py-2">Animazione</a>
                <a href="#azione" className="text-gray-300 hover:text-white px-3 py-2">Azione</a>
                <a href="#fantascienza" className="text-gray-300 hover:text-white px-3 py-2">Fantascienza</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <Bell className="h-6 w-6" />
            </button>
            <img
              className="h-8 w-8 rounded"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&h=64&fit=crop&crop=faces"
              alt="User avatar"
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2">Home</a>
            <a href="#serie-tv" className="text-gray-300 hover:text-white block px-3 py-2">Serie TV</a>
            <a href="#film" className="text-gray-300 hover:text-white block px-3 py-2">Film</a>
            <a href="#nuovi-e-popolari" className="text-gray-300 hover:text-white block px-3 py-2">Nuovi e popolari</a>
          </div>
        </div>
      )}
    </nav>
  );
}
