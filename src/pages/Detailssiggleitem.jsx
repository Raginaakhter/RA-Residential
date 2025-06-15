import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Detailssiggleitem = () => {
    const data = useLoaderData();
    const { title, description, img_url, price, status, area_sqft, category, bedrooms, location } = data;
    console.log(data);
    return (
        <div className="px-4 py-6 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-4 pt-4">
                    <img
                        src={img_url}
                        alt={title}
                        className="rounded-xl w-full max-h-[300px] object-cover"
                    />
                </figure>
                <div className="card-body items-center text-center px-4">
                    <h2 className="card-title text-2xl font-semibold mb-4">{title}</h2>

                    <p className="mb-2">{description}</p>
                    
                    <p className="mb-1 text-sm sm:text-base">
                        <span className="font-semibold">Price:</span> {price},&nbsp;
                        <span className="font-semibold">Status:</span> {status},&nbsp;
                        <span className="font-semibold">Area:</span> {area_sqft} sqft
                    </p>
                    <p className="mb-4 text-sm sm:text-base">
                        <span className="font-semibold">Category:</span> {category},&nbsp;
                        <span className="font-semibold">Bedrooms:</span> {bedrooms},&nbsp;
                        <span className="font-semibold">Location:</span> {location}
                    </p>

                    <div className="card-actions">
                        <Link to='/' className="btn border-t-green-600 bg-emerald-500 w-full sm:w-40 mx-auto">
                            Go back Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detailssiggleitem;
