import * as React from "react";
import { useParams } from "react-router-dom";
import StickyHeader from "../components/Stickyheader";

const Product = () => {
  const { id } = useParams();
  const [pv, setPv] = React.useState(0);

  const EXAMPLE = [
    "https://cdn3.tmbi.com/secure/RMS/attachments/37/1200x1200/exps28800_UG143377D12_18_1b_RMS.jpg",
    "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,w_1460/https://storage.googleapis.com/gen-atmedia/3/2012/07/f2203c0e403286947dcf80815b656236fec71e88.jpeg",
    "https://2.bp.blogspot.com/-k9accfysoS4/T6fkztpqQhI/AAAAAAAAASM/OYcyLvdgfiI/s1600/Mie+Ayam1.jpg",
  ];

  return (
    <div>
      <StickyHeader />
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
            <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              {/* Product Image */}
              <div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={EXAMPLE[pv || 0]}
                    alt="Product-Image"
                    className="w-full h-96 object-cover object-center"
                  />
                </div>
                <div className=" flex gap-2 py-2">
                  {EXAMPLE.map((item, index) => {
                    return (
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          setPv(index);
                        }}
                        className={` cursor-pointer overflow-hidden rounded-xl ${
                          pv == index ? "border-4 border-brown-500" : ""
                        } w-1/3 h-36 sm:h-28 md:h-28`}
                      >
                        <img
                          src={item}
                          alt="Product-Image"
                          className=" object-cover object-center w-full h-full"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className=" mb-3 font-poppins text-xl font-semibold text-brown-300">
                    Rp. 12.000.000
                  </div>
                  {/* Product Title */}
                  <h1 className="text-xl text-brown-500 font-semibold sm:text-4xl font-poppins">
                    Burger
                  </h1>
                  {/* Product Description */}
                  <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4 font-poppins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Sed enim ut sem viverra aliquet eget sit. Odio
                    facilisis mauris sit amet Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Sed enim ut sem
                    viverra aliquet eget sit. Odio facilisis mauris sit amet
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                {/* Quantity Input and Order Button */}
                <div className=" ">
                  {/* Order Button */}
                  <div className="w-full text-left my-4">
                    <button
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-brown-500 text-white text-md font-bold border border-brown-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-brown-500 lg:m-0 md:px-6"
                      title="Confirm Order"
                    >
                      <span className=" font-poppins">Beli Sekarang</span>
                      {/* <HiOutlineArrowCircleRight /> */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
