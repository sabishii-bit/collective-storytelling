"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigation = (url: string) => {
    setIsOpen(false); // Close menu
    router.push(url); // Navigate
  };

  useEffect(() => {
    const handlePopState = () => setIsOpen(false); // Close menu on back button
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-40 p-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <nav className="mt-16 space-y-4 px-6">
          <button
            onClick={() => handleNavigation("/")}
            className="block text-lg text-left hover:text-gray-400"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation("/los-angeles-wildfires")}
            className="block text-lg text-left hover:text-gray-400"
          >
            Los Angeles Wildfires
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default NavigationMenu;
