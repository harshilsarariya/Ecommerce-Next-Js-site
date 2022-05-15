import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10 ">
      <div className="logo mx-5">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={140} height={45} />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex justify-center space-x-5 font-medium md:text-lg">
          <Link href="/tshirts">
            <a>
              <li>T-shirts</li>
            </a>
          </Link>
          <Link href="/mugs">
            <a>
              <li>Mugs</li>
            </a>
          </Link>
          <Link href="/stickers">
            <a>
              <li>Stickers</li>
            </a>
          </Link>
          <Link href="/hoodies">
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart  absolute right-0 top-4 flex cursor-pointer">
        <Link href={"/login"}>
          <MdOutlineAccountCircle className="text-xl md:text-3xl mr-3" />
        </Link>
        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-3xl mr-3"
        />
      </div>
      <div
        ref={ref}
        className={`absolute w-72 h-[100vh]  top-0 right-0 slideCart z-10 bg-orange-200 p-10 transform transition-transform ${
          Object.keys(cart).length !== 0 ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <h2 className="font-bold text-xl">Sopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-5 right-2 cursor-pointer text-2xl "
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length === 0 && (
            <div className="my-4 font-semibold">Your cart is Empty!</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item my-5 flex">
                  <div className="w-2/3 font-semibold">{cart[k].name}</div>
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
        <div className="flex mt-6">
          <Link href={"/checkout"}>
            <button className="flex items-center    text-white bg-orange-500 border-0 py-2 mr-2 px-3 focus:outline-none hover:bg-orange-600 rounded text-sm">
              <BsFillBagCheckFill className="mr-2" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex items-center    text-white bg-orange-500 border-0 py-2 px-3 mr-2 focus:outline-none hover:bg-orange-600 rounded text-sm"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
