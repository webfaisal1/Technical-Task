import React, { Fragment, useEffect, useState } from 'react';

const YourSearchedItems = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
      fetch("fakeApi.json")
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }, []);

  return (
    <Fragment>
      <section className="py-16">
        <h1 className="text-[24px] mb-[10px] ml-[20px] font-semibold ">
          Your searched items
        </h1>
        <div className="w-full h-[1px] border border-[#FFAE5D] border-dashed"></div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 ">
          {product.slice(0, 5).map((data) => (
            <div key={data._id} className="p-[10px]">
              <img src={data.picture} alt="" />
              <h1 className=" text-[16px] font-medium my-[5px] ">
                {data.name}
              </h1>
              <div className="flex justify-between items-center">
                <h4 className="text-[16px] font-normal ">{data.price}</h4>
                <h4 className="text-[16px] font-normal text-[#FF3232]">
                  -{data.discount}% off
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default YourSearchedItems;