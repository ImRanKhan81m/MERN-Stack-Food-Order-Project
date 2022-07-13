import React from 'react';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const Album = () => {
    return (
        <div className='mid-container'>
            <div>
                <img className='rounded-3xl w-full' src={img1} alt="" />
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 gap-5 mt-2'>
                <img className='rounded-3xl w-full' src={img2} alt="" />
                <img className='rounded-3xl w-full' src={img3} alt="" />
                <img className='rounded-3xl w-full' src={img4} alt="" />
            </div>
        </div>
    );
};

export default Album;