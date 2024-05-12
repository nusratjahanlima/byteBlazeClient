import { useState, useEffect } from 'react';

const AppleMacBook = () => {
    const [appleMacBookLaptops, setAppleMacBookLaptops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch all cars from the server
                const response = await fetch('http://localhost:5000/allLaptops');
                const data = await response.json();

                // Filter out only the cars with make "Toyota"
                const appleMacBookLaptopsData = data.filter(laptop => laptop.make === "Ford");

                // Update the state with Toyota cars data
                setAppleMacBookLaptops(appleMacBookLaptopsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <h1>Apple MacBook</h1>
            <div>
                {appleMacBookLaptops.map(laptop => (
                    <div key={laptop._id}>
                        <p>Make: {laptop.make}</p>
                        <p>Model: {laptop.model}</p>
                        <p>Memory(RAM): {laptop.memory}</p>
                        <p>Color: {laptop.color}</p>
                        <p>Storage: {laptop.storage}</p>
                        <p>Price: {laptop.price}</p>
                        <img src={laptop.image} alt={`AppleMacBook ${laptop.model}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppleMacBook;
