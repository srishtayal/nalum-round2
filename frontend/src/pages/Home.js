import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="bg-red-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-3xl font-bold">
            <Link to="/" className="text-white">
              NALUM
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200">About</Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gray-200">Events</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-cover bg-center h-96 flex justify-center items-center text-gray-800" style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)' }}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to NALUM</h1>
          <p className="text-xl">Connecting NUST Alumni for a brighter future.</p>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">About NALUM</h2>
          <p className="text-lg mb-4">
            NALUM, the NUST Alumni Association, is dedicated to bringing together alumni from all disciplines to foster collaboration, networking, and opportunities for personal and professional growth.
          </p>
          <Link to="/about" className="text-red-900 font-bold">Learn More</Link>
        </div>
      </section>

      <section id="events" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Event Title 1</h3>
              <p className="text-lg mb-4">Details about the event...</p>
              <Link to="/events" className="text-red-900 font-bold">View Details</Link>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Event Title 2</h3>
              <p className="text-lg mb-4">Details about the event...</p>
              <Link to="/events" className="text-red-900 font-bold">View Details</Link>
            </div>

            {/* Event Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Event Title 3</h3>
              <p className="text-lg mb-4">Details about the event...</p>
              <Link to="/events" className="text-red-900 font-bold">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <p className="text-lg mb-4">Have any questions or want to get involved? Reach out to us!</p>
          <Link to="/contact" className="text-red-900 font-bold">Get in Touch</Link>
        </div>
      </section>

      <footer className="bg-red-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 NALUM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
