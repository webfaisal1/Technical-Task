import React, { Fragment } from 'react';
import component1 from "../assets/images/Component 1.png";

const Alexa = () => {
  return (
    <Fragment>   
      <section>
        <div className="py-16">
          <img src={component1} alt="" />  
        </div>  
      </section>
    </Fragment>
  );
};

export default Alexa;