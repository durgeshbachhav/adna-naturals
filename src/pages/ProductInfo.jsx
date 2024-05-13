import React from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import products from "../data/products/products.js";
import heroImage from "../assets/textures/texture1.png";

import HeroSection from "../components/HeroSection";
const ProductInfo = () => {
  const { id } = useParams();
  console.log("id", id);
  const productinfo = products.find((product) => product.id === id);
  const { image, name, price, description, aboutThisItem, benefits, category } =
    productinfo;
  return (
    <Layout>
      <HeroSection title="Product Details" image={heroImage} />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="grid gap-4 lg:grid-cols-5">
              <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={image}
                    loading="lazy"
                    alt={name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  sale
                </span>

                <a
                  href="#"
                  className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500">
                  Adna Naturals
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {name}
                </h2>
              </div>

              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-green-500 px-2 text-white">
                  <span className="text-sm">4.2</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span className="text-sm text-gray-500 transition duration-100">
                  56 ratings
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    {price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    Rs. 30.00
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  MRP INCLUSIVE OF ALL TAXES
                </span>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>

                <span className="text-sm">2-4 day shipping</span>
              </div>

              <div className="flex gap-2.5">
                <a
                  href="#"
                  className="inline-block flex-1 rounded-lg bg-green-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 sm:flex-none md:text-base"
                >
                  Send Message
                </a>

                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-green-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="text-lg ">Description:</div>
          <div> {description}</div>
          <div className="text-lg ">About this Item: </div>
          <div>{aboutThisItem}</div>
          <ul className="list-disc ">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
