import React, { Fragment } from 'react';
import vactor from '../assets/images/Vector1.png'

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-[#404040] ">
        <div className='container' >
          <div className="text-[#FFFFFF] flex flex-col md:flex-row justify-between items-center gap-4  py-[20px] ">
            <div>
              <h1 className="text-[32px]">
                {" "}
                <span className="font-bold">shop</span>{" "}
                <span className="font-light">cart</span>
              </h1>
            </div>
            <div className="flex space-x-4 text-[16px] ">
              <h1>About us</h1>
              <h1>Contact</h1>
              <h1>Help</h1>
            </div>
            <div className="text-[16px] flex space-x-2 items-center ">
              <h1>English</h1>
              <img src={vactor} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;