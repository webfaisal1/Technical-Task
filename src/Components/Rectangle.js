import React, { Fragment } from 'react';
import ractang from '../assets/images/Rectangle 3.png'

const Rectangle = () => {
  return (
    <Fragment>
      <section className="py-16">
        <div className="w-full">
          <img src={ractang} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Rectangle;