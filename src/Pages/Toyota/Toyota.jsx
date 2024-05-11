import { useState, useEffect } from 'react';

const Toyota = () => {
    const [toyotaCars, setToyotaCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all cars from the server
                const response = await fetch('http://localhost:5000/allCars');
                const data = await response.json();

                // Filter out only the cars with make "Toyota"
                const toyotaCarsData = data.filter(car => car.make === "Ford");

                // Update the state with Toyota cars data
                setToyotaCars(toyotaCarsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <h1>Toyota Cars</h1>
            <div>
                {toyotaCars.map(car => (
                    <div key={car._id}>
                        <p>Make: {car.make}</p>
                        <p>Model: {car.model}</p>
                        <p>Year: {car.year}</p>
                        <p>Color: {car.color}</p>
                        <p>Mileage: {car.mileage}</p>
                        <p>Price: {car.price}</p>
                        <img src={car.image} alt={`Toyota ${car.model}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Toyota;
