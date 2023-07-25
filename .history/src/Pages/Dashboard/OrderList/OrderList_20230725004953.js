import { useQuery } from '@tanstack/react-query';
import React from 'react';

const OrderList = () => {
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookins'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-sepia.vercel.app/bookings');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto p-7">
            <h2 className='text-2xl font-bold mb-10'>Order List</h2>
            <table className="table w-full bg-secondary border-separate border-spacing-y-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        bookings.map((booking, i) => <tr key={booking._id}>
                            <td>{booking.name}</td>
                            <td>{booking.email}</td>
                            <td>{booking.treatName}</td>
                            <td>{booking.paymentType}</td>
                            <td>

                                {
                                    approved && <button className='btn btn-success'>Done</button>
                                }
                                {
                                    !approved && <button className='btn btn-info'>Pending</button>
                                }

                            </td>
                        </tr>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;