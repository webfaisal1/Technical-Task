import React, { Fragment } from 'react';
import logo from '../assets/images/shopcart.png'
import userIcon from '../assets/images/Vector.png'

const Navbar = () => {
  return (
    <Fragment>
      <section>
        <div className="max-w-[1200px] px-[10px]  mx-auto">
          <div className="flex justify-between items-center border-b-[1px] border-[#808080] py-[20px]">
            <img src={logo} alt="" />
            <div className="flex ">
              <img src={userIcon} alt="" />
              <h3 className="text-base text-[#000000] font-medium ml-[10px]">
                Sign In
              </h3>
            </div>
          </div>
          <div className="flex justify-between items-center   py-[20px]">
            <button className="bg-[#FFAE5D] w-[151px] h-[56px] text-base rounded-[20px] font-medium text-[#000000]">
              Dhaka, 1212
            </button>

            <div
              className="w-[522px] items-center  py-[10px] flex justify-between px-[10px] rounded-[20px]"
              style={{ border: "1px solid rgba(128, 128, 128, 0.5)" }}
            >
              <input type="text" placeholder="Search" />
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div>
            <ul className="flex flex-wrap justify-around text-base items-center font-medium text-[##606060]">
              <li>
                <a href="">Fresh</a>
              </li>
              <li>
                <a href="">Today’s Deals</a>
              </li>
              <li>
                <a href="">Mobiles</a>
              </li>
              <li>
                <a href="">Gift Cards</a>
              </li>
              <li>
                <a href="">Women Clothing</a>
              </li>
              <li>
                <a href="">Men Clothing</a>
              </li>
              <li>
                <a href="">Kids Clothing</a>
              </li>
              <li>
                <a href="">Health</a>
              </li>
              <li>
                <a href="">Pet corner</a>
              </li>
              <li>
                <a href="">Books</a>
              </li>
              <li>
                <a href="">Beauty</a>
              </li>
              <li>
                <a href="">Kitchen</a>
              </li>
              <li>
                <a href="">Bed Room</a>
              </li>
              <li>
                <a href="">Sport</a>
              </li>
              <li>
                <a href="">Bags</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Navbar;