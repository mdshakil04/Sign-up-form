/* eslint-disable no-unused-vars */
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
const Navbar = () => {
    return (
        <div>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">Real Food Store</a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator gap-4">
                    <p className=" text-lg"><FaSearch></FaSearch></p>
                    <p className=" text-lg"><FaShareAlt></FaShareAlt></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Navbar;