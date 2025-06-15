

import Banner from "./Banner";
import {  useLoaderData } from 'react-router-dom';
import ProductsItem from "./ProductsItem";
import Accordion from "./Accordion";
import TemMembersec from "./TemMembersec";


const Home = () => {
      const item = useLoaderData();
    console.log(item);
   
    return (
        <div>
           {/* Banner section */}
            <Banner></Banner>
           
               <div>
            <div className='text-3xl font-semibold text-green-600 text-center'>
                <h1>Our Estate</h1>
                <p>Some  caregory : {item.length}</p>
            </div>

           
        <div className="grid grid-cols-3 gap-2 ">
             {
                item.map(card => <ProductsItem key={card.id} card={card}></ProductsItem>)
            }
           </div>
          
        </div>
        {/* This is Accordion section */}
        <div>
            <Accordion></Accordion>
        </div>
            <div>
                <TemMembersec></TemMembersec>
            </div>
        </div>
    );
};

export default Home;