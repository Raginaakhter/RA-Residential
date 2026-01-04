import Banner from "./Banner";
import { useLoaderData } from 'react-router-dom';
import ProductsItem from "./ProductsItem";
import Accordion from "./Accordion";
import TemMembersec from "./TemMembersec";

const Home = () => {
  const item = useLoaderData(); 
  console.log(item);

  return (
    <div>
      {/* banner section */}
      <Banner />

     
      <div className="px-4 py-8">
        <h1 className="text-3xl font-semibold text-green-600 text-center mb-6">Our Estate</h1>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {item.map(card => (
            <ProductsItem key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* Accordion */}
      <Accordion />

      {/* Team member*/}
      <TemMembersec />
    </div>
  );
};

export default Home;
