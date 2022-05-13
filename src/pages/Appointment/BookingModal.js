import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid gird-cols-1 gap-3 justify-items-center my-4'>
                        <input disabled value={format(date, 'PP')} type="text" placeholder="Type here" className="input w-full max-w-xs input-bordered" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input w-full max-w-xs input-bordered" />
                        <input type="email" name='email' placeholder="Your Email Address" className="input w-full max-w-xs input-bordered" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input w-full max-w-xs input-bordered" />
                        <input type="submit" value="Submit" className="btn btn-secondary input w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;