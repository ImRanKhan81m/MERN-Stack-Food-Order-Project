import React from 'react';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const Album = () => {
    return (
        <div className='mid-container mt-10'>
            <div>
                <img
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    className='rounded-3xl w-full' src={img1} alt="" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 mt-2'>
                <img
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    className='rounded-3xl w-full' src={img2} alt="" />
                <img
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    className='rounded-3xl w-full' src={img3} alt="" />
                <img
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    className='rounded-3xl w-full' src={img4} alt="" />
            </div>
        </div>
    );
};

export default Album;