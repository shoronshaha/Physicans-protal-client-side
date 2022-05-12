import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../Shared/Button/PrimaryButton';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="lg:max-w-sm min-w-sm rounded-lg shadow-2xl" src={chair} alt
                        ='' />
                    <div>
                        <h1 className="lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;