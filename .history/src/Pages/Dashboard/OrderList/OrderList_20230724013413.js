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
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, i) => <tr key={booking._id}>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>)

                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;