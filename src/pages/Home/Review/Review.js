import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>We may consider a Doctor, the most important person in society. He treats people suffering from one or many diseases. All the doctors work for making society fit, healthy and happy</p>

                <div className='flex items-center gap-4 my-5'>
                    <div className='avatar'>
                        <div className='w-16 rounded-full ring ring-primary ring offset-base-100 ring-offset-2'>
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <h4 className=''>{review.location}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;