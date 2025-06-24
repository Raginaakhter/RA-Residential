import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Itempage1 = () => {
    const data = useLoaderData();

    return (
        <div className="px-4 py-6 max-w-7xl mx-auto bg-white text-black">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Total Items: {data.length}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 text-black border rounded-lg shadow-md overflow-hidden w-full max-w-sm mx-auto"
                        >
                            <figure>
                                <img
                                    src={item.img_url || "https://source.unsplash.com/400x300/?luxury-house,waterfront"}
                                    alt={item.title}
                                    className="w-full h-52 object-cover"
                                />
                            </figure>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                                <p className="text-sm">{item.description}</p>
                                <div className="mt-4">
                                    <Link to={`/details/${item.id}`} className="btn btn-primary w-full">
                                        View Property
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Itempage1;
