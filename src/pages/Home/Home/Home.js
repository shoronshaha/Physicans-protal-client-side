import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import Info from '../Info/Info';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Banner2></Banner2>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;