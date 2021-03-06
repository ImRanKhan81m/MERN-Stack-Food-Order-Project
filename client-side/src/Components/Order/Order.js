import React from 'react';
import img1 from '../../assets/icon/icon-1.png'
import img2 from '../../assets/icon/icon-2.png'
import img3 from '../../assets/icon/icon-3.png'

const Order = () => {
    return (
        <div className='mid-container about mt-10'>
            <h6
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className='text-success text-3xl text-center'>Order Now</h6>
            <h2
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                className='lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-3 text-center font-medium'>Fastest Home Delivery</h2>

            <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5'>


                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>7:00AM To 10:30PM</h2>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>8801309-091104</h2>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1400"
                    data-aos-easing="ease-in-out" className=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">

                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>Fatikchhari, Chittagong</h2>
                    </div>
                </div>
            </div>

            <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                className='bg-neutral mt-10 rounded-3xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2'>
                <div className="card-body lg:p-8 md:p-5 sm:p-3 px-3 pb-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-warning text-xl font-semibold">Your Name:</span>
                        </label>
                        <input type="name" placeholder="Customer's Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-warning text-xl font-semibold">Your Order:</span>
                        </label>
                        <input type="text" placeholder="Food Your Want" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-warning text-xl font-semibold">Your Details:</span>
                        </label>
                        <input type="text" placeholder="Your Message" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-2">
                        <textarea type="text" placeholder="Your Address" className="textarea input-bordered h-40" />
                    </div>
                </div>
                <div className="card-body lg:p-8 md:p-5 sm:p-3 px-3 pt-0">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-warning text-xl font-semibold">Your Number:</span>
                        </label>
                        <input type="number" placeholder="Customer's Number" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-warning text-xl font-semibold">How Much:</span>
                        </label>
                        <input type="text" placeholder="Number of orders" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-warning text-xl font-semibold">Your Details:</span>
                        </label>
                        <input type="text" placeholder="Your Message" className="input input-bordered" />
                    </div>

                    <div className="form-control mt-3">
                        <iframe className="map rounded" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d920.8655458961642!2d91.86358437218747!3d22.599209801638004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1657774381763!5m2!1sen!2sbd" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                    <div className="mt-6 text-end">
                        <button className="btn btn-success text-neutral butn btn-sm">Proceed To Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;