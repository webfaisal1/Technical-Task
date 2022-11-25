import React, { Fragment } from 'react';
import component1 from "../assets/images/Component 1.png";

const Alexa = () => {
  return (
    <Fragment>
      <section className="py-16">
        <div className='w-full' >
          <img src={component1} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Alexa;