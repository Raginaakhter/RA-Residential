import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Itempage1 = () => {
    const data = useLoaderData();

    console.log(data);

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Total Items: {data.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.map((item, index) => (
                        <div key={index} className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src={item.img_url || "https://source.unsplash.com/400x300/?luxury-house,waterfront"}
                                    alt={item.title}
                                    className="rounded-xl h-52 object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.title}</h2>
                                <p>{item.description}</p>

                                <div className="card-actions mt-4">
                                    <Link to={`/details/${item.id}`} className="btn btn-primary">View Property</Link>
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
