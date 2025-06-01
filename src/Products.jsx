
import { useLoaderData } from 'react-router-dom';

const Products = () => {

    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <div className='text-3xl font-semibold text-green-600 text-center'>
                <h1>Our Estate</h1>
            </div>
        </div>
    );
};

export default Products;