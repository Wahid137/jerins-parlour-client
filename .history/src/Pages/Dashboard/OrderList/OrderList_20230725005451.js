import { useQuery } from '@tanstack/react-query';
import React from 'react';

const OrderList = () => {
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookins'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookings');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        console.log(id)
        // fetch(`http://localhost:5000/users/admin/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         authorization: `bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {
        //             toast.success('Make admin successfully')
        //             refetch();
        //         }
        //     })

    }
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
                                    booking.approved && <button className='btn btn-success'>Done</button>
                                }
                                {
                                    !booking.approved && <button onClick={() => handleMakeAdmin(booking._id)} className='btn btn-info'>Pending</button>
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