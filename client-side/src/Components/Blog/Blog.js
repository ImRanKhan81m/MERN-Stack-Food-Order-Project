import React from 'react';
import img1 from '../../assets/image/blog-img-1.jpg'
import img2 from '../../assets/image/blog-img-2.jpg'
import img3 from '../../assets/image/blog-img-3.jpg'

const Blog = () => {
    return (
        <div className='mid-container about'>
            <h6 className='text-success text-3xl text-center'>Order Now</h6>
            <h2 className='lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-3 text-center font-medium'>Fastest Home Delivery</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-10'>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Blog" /></figure>
                    <div class="card-body bg-neutral">
                        <div class="text-sm breadcrumbs">
                            <ul className='text-warning'>
                                <li className='duration-300 hover:text-success'><a>Food</a></li>
                                <li className='duration-300 hover:text-success'><a>Burger</a></li>
                                <li className='duration-300 hover:text-success'><a>Pizza</a></li>
                            </ul>
                        </div>
                        <h2 class="text-xl font-semibold text-warning">Blog Title Goes Here...</h2>
                        <p className='text-warning'>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Autem, Earum.</p>
                        <div class="card-actions justify-start">
                            <button class="btn btn-success text-neutral butn btn-sm mt-3">Read More</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Blog" /></figure>
                    <div class="card-body bg-neutral">
                        <div class="text-sm breadcrumbs">
                            <ul className='text-warning'>
                                <li className='duration-300 hover:text-success'><a>Food</a></li>
                                <li className='duration-300 hover:text-success'><a>Burger</a></li>
                                <li className='duration-300 hover:text-success'><a>Pizza</a></li>
                            </ul>
                        </div>
                        <h2 class="text-xl font-semibold text-warning">Blog Title Goes Here...</h2>
                        <p className='text-warning'>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Autem, Earum.</p>
                        <div class="card-actions justify-start">
                            <button class="btn btn-success text-neutral butn btn-sm mt-3">Read More</button>
                        </div>
                    </div>
                </div>
                <div class="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Blog" /></figure>
                    <div class="card-body bg-neutral">
                        <div class="text-sm breadcrumbs">
                            <ul className='text-warning'>
                                <li className='duration-300 hover:text-success'><a>Food</a></li>
                                <li className='duration-300 hover:text-success'><a>Burger</a></li>
                                <li className='duration-300 hover:text-success'><a>Pizza</a></li>
                            </ul>
                        </div>
                        <h2 class="text-xl font-semibold text-warning">Blog Title Goes Here...</h2>
                        <p className='text-warning'>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Autem, Earum.</p>
                        <div class="card-actions justify-start">
                            <button class="btn btn-success text-neutral butn btn-sm mt-3">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;