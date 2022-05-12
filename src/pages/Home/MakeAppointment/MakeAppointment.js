import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/Button/PrimaryButton';


const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})` }}
            className='lg:lg:container mx-auto flex justify-center items-center my-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Doctors play a pivotal role in building the society. They are the lifelines of the community. This term can be used very literally for the Doctors who shape culture and save those that are diseased and unhealthy. Doctors work hard to save the lives of patients with serious ailments. They act as an inspiration to society.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;