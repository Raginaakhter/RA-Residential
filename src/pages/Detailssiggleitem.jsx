import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';

const Detailssiggleitem = () => {
    const data =useLoaderData();
    const {title,description,img_url,price,status,area_sqft,category,bedrooms,location}=data;
    console.log(data);
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src ={img_url}

      alt="Shoes"
      className="rounded-xl w-200 h-120 " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2> <br />
    {description} ,<br />
  Price:{price} ,
 status:{status} ,
 Area:{area_sqft} ,<br />
 Category:{category}, 
 Member:{bedrooms} ,
 Location:{location} 
   
    <div className="card-actions">
      <Link to='/' className="btn border-t-green-600 bg-emerald-500 w-40"> Go back Home</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Detailssiggleitem;