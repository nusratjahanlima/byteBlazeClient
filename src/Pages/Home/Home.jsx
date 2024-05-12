import { Link, useLoaderData } from "react-router-dom";
import Caro from "./Caro";


const Home = () => {
    const a = useLoaderData();

    return (
        <div>

        <Caro/>


            <div className=" p-6 mt-10 bg-indigo-100">
                <h1 className="text-center  text-black text-4xl font-bold">Latest Three Laptops Here</h1>
                <div className="flex justify-evenly g-slate-100 mt-12">
                    {a.map(b => <div
                        key={b._id}
                    >
                        <div className="laptops-card p-4">
                            <img src={b.image} alt="" />
                            <p className='text-red-600 font-bold'>Price: {b.price}$</p>
                            <p>Color: {b.color}</p>
                            <p>Company: {b.make}</p>
                            <p>Model: {b.model}</p>
                            <p>Memory(RAM): {b.memory}</p>
                            <p>Storage: {b.storage}</p>
                            <Link to={`/singleLaptops/${b._id}`}><button className='btn btn-outline mt-5'>Buy {b.model}</button></Link>
                        </div>
                    </div>)}
                </div>

                <div className="flex justify-center mt-10">
                    <Link to='/laptops'><button className="btn btn-outline">View All Laptops</button></Link>
                </div>
            </div>


        </div>
    );
};

export default Home;