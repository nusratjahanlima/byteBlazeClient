import { useLoaderData } from "react-router-dom";


const SingleLaptop = () => {
    const a = useLoaderData();
    const { make, model, memory, color, storage, price, image } = a;
    return (
        <div>
            <div className="laptops-card">
                <img src={image} alt="" />
                <p className='text-red-600 font-bold'>Price: {price}$</p>
                <p>Color: {color}</p>
                <p>Company: {make}</p>
                <p>Model: {model}</p>
                <p>Memory(RAM): {memory}</p>
                <p>Storage: {storage}</p>
            </div>
        </div>
    );
};

export default SingleLaptop;