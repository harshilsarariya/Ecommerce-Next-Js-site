import React from "react";
import Link from "next/link";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className=" mx-16 md:mx-52">
      <h1 className="font-bold text-3xl text-center my-8 ">CheckOut</h1>
      <h2 className="font-bold text-xl">1. Delivery Details</h2>
      <div className="mx-25px my-2">
        <div className="flex">
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Address
            </label>
            <textarea
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="flex">
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 md:w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                PinCode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Review Cart Items */}
      <h2 className="font-bold text-xl my-2">2. Review Cart Items</h2>
      <div className=" w-full  slideCart z-10 bg-orange-200 p-6 m-2 ">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="my-4 font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item my-5 flex">
                  <div className=" font-semibold">{cart[k].name}</div>
                  <div className="flex items-center  font-semibold justify-center  w-1/3">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="mx-1 text-xl cursor-pointer "
                    />
                    {cart[k].qty}
                    <AiFillPlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="mx-1 text-xl cursor-pointer"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <span className="font-bold">Subtotal : {subTotal}</span>
      </div>
      <Link href={"/checkout"}>
        <button className="flex items-center   mt-4 text-white bg-orange-500 border-0 py-2 mx-2 px-3 focus:outline-none hover:bg-orange-600 rounded text-sm">
          <BsFillBagCheckFill className="mr-2" />
          Pay ₹{subTotal}
        </button>
      </Link>
    </div>
  );
};

export default Checkout;
