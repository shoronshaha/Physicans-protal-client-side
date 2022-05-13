import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form className='grid gird-cols-1 gap-3 justify-items-center my-4'>
                        <input disabled value={format(date, 'PP')} type="text" placeholder="Type here" class="input w-full max-w-xs input-bordered" />
                        <select class="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <input type="text" placeholder="Type here" class="input w-full max-w-xs input-bordered" />
                        <input type="text" placeholder="Type here" class="input w-full max-w-xs input-bordered" />
                        <input type="text" placeholder="Type here" class="input w-full max-w-xs input-bordered" />
                        <input type="submit" value="Submit" class="btn btn-secondary input w-full max-w-xs" />
                    </form>
                    <div className="modal-action">
                        <label for="booking-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;