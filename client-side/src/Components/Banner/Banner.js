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
                        <h6 className='text-success text-2xl'>Welcome Foodies</h6>
                        <h2 className='font-bold lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-5'>Different Spices For The Different Tastes 😋</h2>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Omnis Unde Dolores Temporibus Hic Quam Debitis Tenetur Harum Nemo.</p>
                        <button className='btn btn-success text-neutral mt-10'>Order Now</button>
                    </div>
                </div>
                <div className='flex items-center justify-items-end order-1'>
                    <img className='w-full ' src={bannerimg1} alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-5 py-10'>
                <div class="card bg-neutral shadow-xl">
                    <figure class="px-5 pt-10">
                        <img src={img1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-3 ">
                        <h2 class="card-title font-bold text-warning">Combo</h2>
                    </div>
                </div>
                <div class="card bg-neutral shadow-xl">
                    <figure class="px-5 pt-10">
                        <img src={img2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-3 ">
                        <h2 class="card-title font-bold text-warning">Pizza</h2>
                    </div>
                </div>
                <div class="card bg-neutral shadow-xl">
                    <figure class="px-5 pt-10">
                        <img src={img3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-3">
                        <h2 class="card-title font-bold text-warning">Burger</h2>
                    </div>
                </div>
                <div class="card bg-neutral shadow-xl">
                    <figure class="px-5 pt-10">
                        <img src={img4} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-3">
                        <h2 class="card-title font-bold text-warning">Chicken</h2>
                    </div>
                </div>
                <div class="card bg-neutral shadow-xl">
                    <figure class="px-5 pt-10">
                        <img src={img5} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-3">
                        <h2 class="card-title font-bold text-warning">Dinner</h2>
                    </div>
                </div>
                <div class="card bg-neutral shadow-xl">
                    <figure class="px-5 pt-10">
                        <img src={img6} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-3">
                        <h2 class="card-title font-bold text-warning">Coffee</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;