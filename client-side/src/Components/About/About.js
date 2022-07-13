import React from 'react';
import img from '../../assets/image/about-img.png'
import './About.css'

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
                        <button className='btn btn-success text-neutral mt-5'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;