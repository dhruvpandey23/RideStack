import React, { useState } from "react";

import DarkModeIcon from "../assets/dark_mode_icon.svg";
import LightModeIcon from "../assets/light_mode_icon.svg";
import DriverImage from "../assets/image1.jpeg";
import BusinessImage from "../assets/image2.jpeg";
import Logo from "../assets/Logo.png";

import { Link } from "react-router-dom";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedSection, setSelectedSection] = useState("Ride");

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      {/* Main Container */}
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition duration-500">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
          <div className="text-xl font-bold bg-transparent">
            <img src={Logo} alt="Logo" className="w-50 h-10" />
          </div>
          <nav className="flex gap-4">
            <a href="#" className="hover:underline">
              Ride
            </a>
            <a href="#" className="hover:underline">
              Drive
            </a>
            <a href="#" className="hover:underline">
              Business
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
          </nav>
          <div className="flex gap-4">
            <button className="hover:underline">Help</button>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg '>Login</Link>
            <Link to='/signup' className='flex items-center justify-center w-full bg-black text-white py-3 px-2 rounded-lg'>Signup</Link>
            {/* Dark Mode Toggle */}
            <div className="flex justify-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {darkMode ? (
                  <img
                    src={LightModeIcon}
                    alt="Light Mode"
                    className="w-6 h-6"
                  />
                ) : (
                  <img src={DarkModeIcon} alt="Dark Mode" className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row justify-between items-start mx-auto max-w-7xl px-10 py-12 gap-x-12">
          {/* Left Section */}
          <div className="w-full md:w-1/3 flex flex-col justify-start items-start space-y-10 h-full">
            <h1 className="text-4xl font-bold">
              {selectedSection === "Ride"
                ? "Go anywhere with RideStack"
                : "Deliver a Package"}
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedSection("Ride")}
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  selectedSection === "Ride"
                    ? "bg-gray-300 dark:bg-gray-600"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                <span>🚗</span> Ride
              </button>
              <button
                onClick={() => setSelectedSection("Courier")}
                className={`flex items-center gap-2 px-4 py-2 rounded ${
                  selectedSection === "Courier"
                    ? "bg-gray-300 dark:bg-gray-600"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                <span>📦</span> Courier
              </button>
            </div>
            <form className="space-y-4 bg-transparent my-20 rounded w-full">
              <div>
                <input
                  type="text"
                  id="pickup"
                  placeholder="Pickup location"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-black dark:focus:border-white bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="dropoff"
                  placeholder="Dropoff location"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:border-black dark:focus:border-white bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="flex gap-4">
                {selectedSection === "Ride" && (
                  <>
                  
                    <button
                      type="button"
                      className="bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-800 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black px-4 py-2"
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      className="bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-800 font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black px-4 py-2"
                    >
                      Now
                    </button> 
                  </>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                See prices
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <iframe
              className="w-full h-[600px] rounded shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0284390366195!2d77.39973811548452!3d22.720792485108406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396311ae22b2c2b5%3A0x95a3f578145b20f8!2sBhopal!5e0!3m2!1sen!2sin!4v1685450895869!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </main>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-10 bg-gray-100 dark:bg-gray-800">
          <div className="w-full md:w-1/2">
            <img src={DriverImage} alt="Driver" className="rounded-lg" />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">
              Drive when you want, make what you need
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Make money on your schedule with deliveries or rides—or both. You
              can use your own car or choose a rental through Uber.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Get started
              </button>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Already have an account? Sign in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-10 bg-white dark:bg-gray-900">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h1 className="text-3xl font-bold mb-4">
              The Uber you know, reimagined for business
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Uber for Business is a platform for managing global rides and
              meals, and local deliveries, for companies of any size.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
                Get started
              </button>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Check out our solutions
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img src={BusinessImage} alt="Business" className="rounded-lg" />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          &copy; 2024 Uber Clone. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
