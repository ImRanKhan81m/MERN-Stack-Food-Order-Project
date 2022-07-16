import { faHeart, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Popular.css'
import food1 from '../../assets/image/food-1.png'
import food2 from '../../assets/image/food-2.png'
import food3 from '../../assets/image/food-3.png'
import food4 from '../../assets/image/food-4.png'
import food5 from '../../assets/image/food-5.png'
import food6 from '../../assets/image/food-6.png'
import food7 from '../../assets/image/food-7.png'
import food8 from '../../assets/image/food-8.png'


const Popular = () => {
    return (
        <div className='mid-container'>
            <div className='about mt-10'>
                <h6
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className='text-success text-3xl text-center'>Popular Food</h6>
                <h2
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out" className='lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-3 text-center font-medium'>Our Special Dishes</h2>

            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 mt-14 gap-6'>

                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3 ">
                        <img src={food1} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3 ">
                        <img src={food2} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3 ">
                        <img src={food3} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3 ">
                        <img src={food4} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3 ">
                        <img src={food5} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3 ">
                        <img src={food6} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3">
                        <img src={food7} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>


                <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    className="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3 wishlist'>
                        <FontAwesomeIcon className='icon text-primary hover:text-secondary text-3xl' icon={faHeart} />
                    </div>
                    <figure className="px-3">
                        <img src={food8} alt="food" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center lg:p-5 md:p-3 sm:p-3 p-3">
                        <h2 className="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStar} /><FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <small><s className='font-normal'>$56.00</s></small></h3>
                        <div className="card-actions">
                            <button className="btn btn-sm btn-success text-neutral butn my-2">Add To Cart</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Popular;