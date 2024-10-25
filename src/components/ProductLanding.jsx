
import { StarIcon } from "lucide-react";
import { render } from "react-dom";
import React from "react";
import logo from './GriffinImage.jpeg'
const ProductLanding = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen p-8 max-w-full">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Order Our Product</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          This is the only way to get this product in discount.
        </p>
      </header>

      <main className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="flex gap-4">
          
            <img
              src={logo}
              alt="Main product"
              className="flex-grow object-cover rounded"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className="w-6 h-6 text-yellow-400 fill-current"
              />
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-4">Supplement name</h2>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-cyan-400">1000 Rs</span>
            <span className="text-xl text-gray-400 line-through">880</span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, in dolor explicabo ipsum eaque sequi?
          </p>
          <button className="bg-cyan-400 text-black font-bold py-3 px-8 rounded-full text-xl mb-8">
            PURCHASE
          </button>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto sit explicabo consequatur placeat vel odit voluptates saepe eius, odio illo blanditiis rerum quas obcaecati debitis hic voluptatibus quo. Eaque.
            </p>
          </div>

          {/* <div>
            <h3 className="text-2xl font-bold mb-4">Reviews (2)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Customer reviews will be displayed here.
            </p>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default ProductLanding;
