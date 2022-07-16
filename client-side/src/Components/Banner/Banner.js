import React from 'react';
import bannerimg1 from '../../assets/image/home-img-2.png'
import img1 from '../../assets/image/cat-1.png'
import img2 from '../../assets/image/cat-2.png'
import img3 from '../../assets/image/cat-3.png'
import img4 from '../../assets/image/cat-4.png'
import img5 from '../../assets/image/cat-5.png'
import img6 from '../../assets/image/cat-6.png'


const Banner = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                <div className='flex items-center lg:order-1 md:order-1 order-2'>
                    <div className='about'>
                        <h6
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="800"
                            data-aos-easing="ease-in-out"
                            className='text-success text-2xl'>Welcome Foodies
                        </h6>
                        <h2
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="40"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            className='font-bold lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-5'>Different Spices For The Different Tastes 😋</h2>
                        <p data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out">
                            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Omnis Unde Dolores Temporibus Hic Quam Debitis Tenetur Harum Nemo.</p>
                        <div
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1400"
                            data-aos-easing="ease-in-out">
                            <button
                                className='btn btn-success text-neutral mt-10 butn duration-300'>Order Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-items-end order-1'>
                    <img
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        className='w-full ' src={bannerimg1} alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-5 py-10'>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="400"
                    className="card bg-neutral shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center p-3 ">
                        <h2 className="card-title font-bold text-warning">Combo</h2>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="600"
                    className="card bg-neutral shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center p-3 ">
                        <h2 className="card-title font-bold text-warning">Pizza</h2>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    className="card bg-neutral shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center p-3">
                        <h2 className="card-title font-bold text-warning">Burger</h2>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="card bg-neutral shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center p-3">
                        <h2 className="card-title font-bold text-warning">Chicken</h2>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    className="card bg-neutral shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center p-3">
                        <h2 className="card-title font-bold text-warning">Dinner</h2>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1400"
                    className="card bg-neutral shadow-xl">
                    <figure className="px-5 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center p-3">
                        <h2 className="card-title font-bold text-warning">Coffee</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;