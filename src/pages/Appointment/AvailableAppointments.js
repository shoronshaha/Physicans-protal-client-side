import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {
    const [services, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data));
    })
    return (
        <div>
            <p className='text-xl text-secondary text-center font-bold '>Available Appointments on  {format(date, 'PP')}</p>

            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mt-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;