/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Laptop.css'

const LaptopCategory = ({ b }) => {
    const { make, model, year, color, mileage , price, image, _id} = b;

    return (
        <div className="cars-card">
            <img src={image} alt="" />
            <p className='text-red-600 font-bold'>Price: {price}$</p>
            <p>Color: {color}</p>
            <p>Company: {make}</p>
            <p>Model: {model}</p>
            <p>Year: {year}</p>
            <p>Mileage: {mileage}</p>
            <Link to={`/singleLaptops/${_id}`}><button className='btn btn-outline mt-5'>Buy {model}</button></Link>
        </div>
    );
};

export default LaptopCategory;