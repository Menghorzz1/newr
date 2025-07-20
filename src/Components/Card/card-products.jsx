import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
// import { FaStarHalfAlt } from "react-icons/fa6";

export default function CardProduct({
  title,
  description,
  price,
  thumbnail,
  category,
  rating,
  stock,
  id,
}) {
  return (
    <Link
      to={`/product/${id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden px-5"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt="Product image"
          className="w-full h-64 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {category}
        </span>
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
          <svg
            className="w-4 h- text-center text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {title}
            </h2>
          </div>
        </div>
        <div className="py-2">
          <p className="text-lg font-bold text-green-600">{price}</p>
        </div>
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <i className="fas fa-star-half-alt"></i>
          </div>
          <span className="text-gray-600 text-sm ml-2">({rating}/5)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-truck text-blue-500 mr-2"></i>
            <span className="text-sm text-gray-600">Free Shipping</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-blue-500 mr-2"></i>
            <span className="text-sm text-gray-600">
              {stock !== 0 ? (
                <span>"In stock "</span>
              ) : (
                <span className="text-red-500">"Out of stock"</span>
              )}
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-sky-800  py-2 px-4 rounded-full font-semibold hover:bg-teal-700 ">
            Add to Cart
          </button>
          {/* <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-200">
            Quick View
          </button> */}
        </div>
      </div>
    </Link>
  );
}
