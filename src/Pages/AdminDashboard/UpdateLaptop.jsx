import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UpdateLaptop = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allLaptops')
            .then(response => response.json())
            .then(data => {
                setLaptops(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/deleteLaptops/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // If deletion successful, update the car list
                setLaptops(prevLaptops => prevLaptops.filter(laptop => laptop._id !== id));
            } else {
                console.error('Failed to delete car:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Memory(RAM)</th>
                        <th>Color</th>
                        <th>Storage</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {laptops.map(laptop => (
                        <tr key={laptop._id}>
                            <td>{laptop.make}</td>
                            <td>{laptop.model}</td>
                            <td>{laptop.memory}</td>
                            <td>{laptop.color}</td>
                            <td>{laptop.storage}</td>
                            <td>{laptop.price}</td>
                            <td>
                                <img src={laptop.image} alt={`${laptop.make} ${laptop.model}`} className="w-12 h-12" />
                            </td>
                            <td>
                                <Link to={`/singleLaptops/${laptop._id}`}><button className='font-bold'>Details</button></Link>
                                <button className='font-bold text-red-500 ms-4' onClick={() => handleDelete(laptop._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UpdateLaptop;
