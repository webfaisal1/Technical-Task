import React, { Fragment } from 'react';
import ractang from '../assets/images/Rectangle 3.png'
import furniture from '../assets/images/Furniture.png'

const Rectangle = () => {
  return (
    <Fragment>
      <section className="py-16">
        <div className="w-full relative ">
          <img src={ractang} alt="" />
          <div className="absolute top-10 left-0 right-0 ">
            <div className='flex items-center justify-center ' >
              <img className="w-auto" height={500} src={furniture} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Rectangle;