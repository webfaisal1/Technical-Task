import { Fragment, useEffect, useState } from "react";
import React from 'react';

const Banner = () => {


  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("fakeApi.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);



  return (
    <Fragment>
      <section className=" py-16 ">
        <div className=" grid grid-col-1 lg:grid-cols-2 justify-center items-center ">
          <div className="fontFamily ">
            <h1 className="text-[96px] font-light leading-[100px] ">
              {" "}
              We picked some{" "}
              <span className="text-[#FFAE5D] font-bold">cool things</span> for
              you!
            </h1>
          </div>
          <div className="">
            <h1 className="text-[24px] mb-[10px] ml-[20px] font-semibold ">
              hot deals for you
            </h1>
            <div className="w-[500px] h-[1px] border border-[#FFAE5D] border-dashed"></div>

            <div className="gird grid-cols-2 lg:grid-cols-3 gap-2 ">
              {product.slice(0, 6).map((product) => (
                <div className="p-[10px]">
                  <img src={product.picture} alt="" />
                  <h1 className=" text-[16px] font-medium my-[5px] ">
                    {product.name}
                  </h1>
                  <div className="flex justify-between items-center">
                    <h4 className="text-[16px] font-normal ">
                      {product.price}
                    </h4>
                    <h4 className="text-[16px] font-normal text-[#FF3232]">
                      -{product.discount}% off
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner; 