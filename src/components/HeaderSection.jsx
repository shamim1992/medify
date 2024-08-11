import React from 'react'
import { CiMenuFries } from "react-icons/ci";

const HeaderSection = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md z-40 fixed">
        <div className="navbar-start">
          <div className="drawer lg:hidden z-40">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="drawer-button "><CiMenuFries className='h-6 w-6' /></label>
            </div>
            <div className="drawer-side mt-16">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 min-h-full w-60 p-4 ">
                {/* Sidebar content here */}
                <li className='hover:bg-primary hover:text-white rounded'><a>Home</a></li>
                <li className='hover:bg-primary hover:text-white rounded'><a>About Us</a></li>
                <li className='hover:bg-primary hover:text-white rounded'><a>Services</a></li>
                <li className='hover:bg-primary hover:text-white rounded'><a>News</a></li>
                <li className='hover:bg-primary hover:text-white rounded'><a>Gallery</a></li>
                <li className='hover:bg-primary hover:text-white rounded'><a>Patient Review</a></li>
                <li className='hover:bg-primary hover:text-white rounded'><a>Contact Us</a></li>
                <li><a className="bg-primary hover:bg-purple-700 px-4 py-2 rounded-3xl text-white ml-2 cursor-pointer shadow-lg">Appointment</a>
                </li>
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost text-xl ml-5">ChanRe Physiotherapy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold ">
            <li className='hover:bg-primary hover:text-white rounded'><a>Home</a></li>
            <li className='hover:bg-primary hover:text-white rounded'><a>About Us</a></li>
            <li className='hover:bg-primary hover:text-white rounded'><a>Services</a></li>
            <li className='hover:bg-primary hover:text-white rounded'><a>News</a></li>
            <li className='hover:bg-primary hover:text-white rounded'><a>Gallery</a></li>
            <li className='hover:bg-primary hover:text-white rounded'><a>Patient Review</a></li>
            <li className='hover:bg-primary hover:text-white rounded'><a>Contact Us</a></li>

          </ul>
        </div>
        <div className="navbar-end">
          <input type="checkbox" value="dark" className="toggle theme-controller text-yellow-500" />
          <a className="bg-primary hover:bg-purple-700 px-4 py-2 rounded-3xl text-white ml-2 cursor-pointer shadow-lg hidden lg:block">Appointment</a>
        </div>
      </div>




    </div>
  )
}

export default HeaderSection