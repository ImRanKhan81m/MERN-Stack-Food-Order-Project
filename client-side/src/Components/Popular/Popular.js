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
            <div className='about'>
                <h6 className='text-success text-3xl text-center'>Popular Food</h6>
                <h2 className='lg:text-4xl md:text-4xl sm:text-4xl text-3xl text-secondary my-3 text-center font-medium'>Our Special Dishes</h2>
            </div>
            <div className='grid grid-cols-5 mt-14 gap-5'>

                <div class="card  bg-neutral shadow-xl border">
                    <div className='text-end mr-4 mt-3'>
                        <FontAwesomeIcon className='icon text-accent text-3xl' icon={faHeart} />
                    </div>
                    <figure class="px-7 ">
                        <img src={food1} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food2} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food3} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food4} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food5} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food6} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food7} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food8} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food1} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div class="card  bg-neutral shadow-xl border">
                    <figure class="px-7 pt-5">
                        <img src={food2} alt="food" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center p-5">
                        <h2 class="card-title text-warning">Delicious Food</h2>
                        <span className='text-warning font-semibold'>
                            <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStar} /> <FontAwesomeIcon className='icon text-primary' icon={faStarHalfStroke} /> (56)
                        </span>
                        <h3 className='text-warning font-medium'>$40.00 <s className='font-normal'>$56.00</s></h3>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-success text-neutral butn mt-2">Add To Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Popular;