import React, { Fragment } from 'react';
import phone1 from '../assets/images/phone1.png'
import phone2 from '../assets/images/phone2.png'
import start from '../assets/images/star.png'

const ReviewYourPurchase = () => {
  return (
    <Fragment>
      <section className="py-16">
        <h1 className="text-[24px] mb-[10px] ml-[20px] font-semibold ">
          Review your purchase
        </h1>
        <div className="w-full h-[1px] border border-[#FFAE5D] border-dashed"></div>

        <div className=" grid grid-col-1 lg:grid-cols-2 justify-center items-center gap-4 mt-[30px] ">
          <div className="flex justify-between items-center border-[1.5px] border-[#818181] rounded-[20px] px-[10px] py-[20px] ">
            <div>
              <img  src={phone2} alt="" />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold ">
                2021 Apple iPad Pro with <br /> Apple M1 chip (12.9- inch/32.77 cm,
                Wi-Fi, 128GB)
              </h1>
              <h5 className="text-[16px] font-normal mt-[15px] ">
                you bought it at the best price{" "}
              </h5>
              <h3 className="text-[24px] font-semibold ">₹99,900.00</h3>
              <div className="flex space-x-2 mt-[15px] ">
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <h6 className="text-[#FFAE5D] text-[16px] ">0 rating </h6>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center border-[1.5px] border-[#818181] rounded-[20px] px-[10px] py-[20px] ">
            <div>
              <img  src={phone1} alt="" />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold ">
                iPhone 14 Pro Max with Apple M1 chip (6.7- <br /> inch/17.0 cm,
                128GB)
              </h1>
              <h5 className="text-[16px] font-normal mt-[15px] ">
                you bought it at the best price{" "}
              </h5>
              <h3 className="text-[24px] font-semibold ">₹1,39,900.00</h3>
              <div className="flex space-x-2 mt-[15px] ">
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <img src={start} alt="" />
                <h6 className="text-[#FFAE5D] text-[16px]">0 rating</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ReviewYourPurchase;