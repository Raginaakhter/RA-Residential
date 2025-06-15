import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductsItem = ({ card }) => {
  const { title, description, image } = card;
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="p-4">
      <Link to="/itempage1">
        <div className="bg-gray-900 text-white rounded-xl p-4 md:p-6 border border-gray-600 flex flex-col md:flex-row items-center md:items-start gap-4 hover:shadow-lg transition duration-300">
          <img
            src={image}
            alt="Product"
            className="w-full md:w-32 h-32 object-cover rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
            <p className="text-gray-300 text-sm md:text-base">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsItem;
