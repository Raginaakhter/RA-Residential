import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ProductsItem = ({ card }) => {
   

    const { title, description, image } = card
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Link to ="/itempage1">
            <div className=" bg-gray-900 text-white rounded-xl p-8 border border-gray-600 flex items-start space-x-4">
                <img src={image} alt="Single-family home" class="w-28 h-28 object-cover rounded-lg"></img>
                <div>
                    <h2 className="text-2xl font-bold mb-1">{title}</h2>
                    <p className="text-gray-300 text-1">{description}</p>
                </div>
            </div>
</Link>
        </div>
    );
};

export default ProductsItem;