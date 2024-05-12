
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Swal from "sweetalert2";

const AddALaptop = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const imageHostKey = `771e92fe5bf3b4553445891d6b44f4a1`;
    // const { user } = useContext(AuthContext);

    const handleAddLaptop = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const intern = {
                        make: data.make,
                        model: data.model,
                        memory: data.memory,
                        color: data.color,
                        storage: data.storage,
                        price: data.price,
                        image: imgData.data.url,
                    };

                    fetch('http://localhost:5000/postLaptop', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(intern)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            // Use SweetAlert for a nicer notification
                            Swal.fire({
                                title: 'Added Successfully',
                                icon: 'success',
                                showClass: {
                                    popup: 'animate__animated animate__fadeInDown'
                                },
                                hideClass: {
                                    popup: 'animate__animated animate__fadeOutUp'
                                }
                            });

                            // You can navigate or perform any other actions here
                            navigate('/dashboard/AddALaptop');
                        });
                }
            });
    };




    return (
        <div className="">
            <h2 className="text-3xl bg-slate-300 text-center p-2">Add A Laptop Here</h2>

            <form className="flex flex-col items-center" onSubmit={handleSubmit(handleAddLaptop)}>
                <section className="main-section">
                    <section className="second-section">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Make</span></label>
                            <input type="text" {...register("make", {
                                required: "Required"
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Model</span></label>
                            <input type="text" {...register("model", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                            
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Memory(RAM)</span></label>
                            <input type="text" {...register("memory", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                           
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Color</span></label>
                            <input type="text" {...register("color", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>
                    </section>

                    <section className="second-section">
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Storage</span></label>
                            <input  type="text" {...register("storage", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Price</span></label>
                            <input  type="text" {...register("price", {
                                required: true
                            })} className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Laptop Image</span></label>
                            <input type="file" {...register("image", {
                                required: "Image is Required"
                            })} className="input input-bordered w-full max-w-xs" />
                           
                        </div>

                    </section>
                </section>

                <input onClick={toast} className='btn bg-slate-500 w-[130px] mt-4 text-white font-medium' value="Add Laptop" type="submit" />
            </form>

        </div>
    );
};

export default AddALaptop;