import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <footer className="bg-[#404040] ">
        <div className='container' >
          <div className="text-[#FFFFFF] grid grid-cols-1 md:grid-cols-3 justify-around items-center space-x-5 py-[20px] ">
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
            <div className="text-[16px]">
              <h1>English</h1>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;