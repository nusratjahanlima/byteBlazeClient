import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LaptopCategory from "./LaptopCategory";


const Laptops = () => {
    const a = useLoaderData();
    // console.log(a);
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>

            <div className="flex justify-center items-center mb-4">
                <input
                    className="border-2 border-black px-3 rounded-lg"
                    type="text"
                    placeholder="Search LAPTOPS"
                    onChange={
                        event => {
                            setSearchTerm(event.target.value)
                        }
                    }
                />
            </div>


            <div className="laptops-main-section">
                {
                    a.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.make.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map(b => <LaptopCategory
                        key={b._id}
                        b={b}
                        >

                    </LaptopCategory> )
                }
            </div>


        </div>
    );
};

export default Laptops;