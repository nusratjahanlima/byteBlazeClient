import { useLoaderData } from "react-router-dom";


const SingleLaptop = () => {
    const a = useLoaderData();
    const { make, model, year, color, mileage, price, image } = a;
    return (
        <div>
            <div className="laptops-card">
                <img src={image} alt="" />
                <p className='text-red-600 font-bold'>Price: {price}$</p>
                <p>Color: {color}</p>
                <p>Company: {make}</p>
                <p>Model: {model}</p>
                <p>Year: {year}</p>
                <p>Mileage: {mileage}</p>
            </div>
        </div>
    );
};

export default SingleLaptop;