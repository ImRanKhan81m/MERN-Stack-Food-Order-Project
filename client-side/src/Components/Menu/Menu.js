import React from 'react';
import img1 from '../../assets/image/menu-1.png'
import img2 from '../../assets/image/menu-2.png'
import img3 from '../../assets/image/menu-3.png'
import img4 from '../../assets/image/menu-4.png'
import img5 from '../../assets/image/menu-5.png'
import img6 from '../../assets/image/menu-6.png'

const Menu = () => {
    return (
        <div className='mid-container about mt-10'>
            <h6
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className='text-success text-3xl text-center'>Our Menu</h6>
            <h2
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1200"
                className='lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-3 text-center font-medium'>Our Top Dishes</h2>
            <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-5'>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    class="w-full rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>Delicious Food</h2>
                        <p className='text-success font-semibold text'>$40.00</p>
                    </div>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>Delicious Food</h2>
                        <p className='text-success font-semibold text'>$40.00</p>
                    </div>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>Delicious Food</h2>
                        <p className='text-success font-semibold text'>$40.00</p>
                    </div>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1400"
                    class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img4} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>Delicious Food</h2>
                        <p className='text-success font-semibold text'>$40.00</p>
                    </div>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1400"
                    class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img5} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>Delicious Food</h2>
                        <p className='text-success font-semibold text'>$40.00</p>
                    </div>
                </div>
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1400"
                    class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                    <div>
                        <img src={img6} alt="" />
                    </div>
                    <div>
                        <h2 className='text-warning font-semibold text-xl'>Delicious Food</h2>
                        <p className='text-success font-semibold text'>$40.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;