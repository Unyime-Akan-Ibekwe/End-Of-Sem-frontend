import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">


      <div className=" text-white py-20 px-10 text-center relative bg-gradient-to-r from-blue-400 to-red-500">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          WELCOME TO THE CAMPUS EVENTS HUB
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          Discover, RSVP, and create events with minimum effort.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link to="/events">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100">
              BROWSE EVENTS
            </button>
          </Link>

          <Link to="/createEvent">
            <button className="px-8 py-4 bg-blue-700 font-bold rounded-lg hover:bg-green-900">
              CREATE EVENT
            </button>
          </Link>
        </div>
      </div>


      <div className="bg-gray-100 py-16 px-10">
        <h2 className="text-10xl md:text-4xl font-extrabold text-center mb-8">
          WHY WE ARE SO DIFFERENT
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center max-w-xs text-center">
            <img

            />
            <h3 className="text-xl font-bold">EVENT CALENDAR</h3>
            <p className="mt-4 text-gray-700">
            Keep track of all events effortlessly with a user-friendly calendar view.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center">
            <img
              src="/assets/RSVP-icon.png"
              alt="RSVP"
              className="w-30 mb-5"
            />
            <h3 className="text-xl font-bold">RSVP</h3>
            <p className="mt-4 text-gray-700">             
             You can effortlessly join events and manage your participation with ease.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center">

            <h3 className="text-xl font-bold">ADMIN CAPABILITIES</h3>
            <p className="mt-4 text-gray-700">
            Our admins can easily create, manage, and oversee events.
            </p>
          </div>
        </div>
      </div>


      <div className="bg-white py-20 px-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          VOICES FROM OUR COMMUNITY
        </h2>
        <div className="flex flex-wrap justify-center gap-9">
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600">
            "This platform has greatly enriched life on campus"
            </p>
            <p className="mt-4 text-blue-500 font-bold">- Charlie Kimble</p>
          </div>
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600">
              "Event management has never been simpler"
            </p>
            <p className="mt-4 text-blue-500 font-bold">- Samuel Mensah</p>
          </div>
          <div className="max-w-sm p-6 bg-gray-100 rounded-lg shadow-md">
            <p className="text-gray-600">
              "Recommendation is a must!"
            </p>
            <p className="mt-4 text-blue-500 font-bold">- Mary Edmund</p>
          </div>
        </div>
      </div>
    

      <footer className="bg-aquamarine-500 text-white py-8 text-center">
        <nav className="flex justify-center gap-4">

          <Link to="/events" className="hover:underline">
            EVENTS
          </Link>

          <Link to="/createEvent" className="hover:underline">
            CREATE EVENT
          </Link>

          <Link to="/calendar" className="hover:underline">
            CALENDAR
          </Link>

          <Link to="/login" className="hover:underline">
            LOGIN
          </Link>

        </nav>
        <p className="mt-5">
          &copy; {new Date().getFullYear()} The Campus Event Management Hub
        </p>
        
      </footer>
    </div>
  );
}
