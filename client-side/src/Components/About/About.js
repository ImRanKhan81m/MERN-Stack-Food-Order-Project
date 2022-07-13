import React from 'react';
import img from '../../assets/image/about-img.png'
import './About.css'
import logo1 from '../../assets/icon/serv-1.png'
import logo2 from '../../assets/icon/serv-2.png'
import logo3 from '../../assets/icon/serv-4.png'

const About = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                <div className='lg:order-1 md:order-1 order-2 lg:mt-0 md:mt-0 mt-10 flex items-center'>
                    <img src={img} alt="" />
                </div>
                <div className='flex items-center justify-content-center lg:order-2 md:order-2 order-1'>
                    <div className='about'>
                        <h6 className='text-success text-3xl'>Why Choose Us?</h6>
                        <h2 className='font-bold lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-5'>What's Make Our Food Delicious!</h2>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Eos Ut Explicabo, Numquam Iusto Est A Ipsum Assumenda Tempore Esse Corporis?</p>
                        <button className='btn btn-success text-neutral my-5 butn'>Read More</button>

                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                            <div class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                                <div>
                                    <img src={logo1} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-warning font-bold'>Fast Delivery</h2>
                                </div>
                            </div>
                            <div class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                                <div>
                                    <img src={logo2} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-warning font-bold'>Fresh Food</h2>
                                </div>
                            </div>
                            <div class=" rounded-2xl bg-neutral shadow-xl flex gap-5 items-center justify-center p-3">
                                <div>
                                    <img src={logo3} alt="" />
                                </div>
                                <div>
                                    <h2 className='text-warning font-bold'>24/7 Support</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;