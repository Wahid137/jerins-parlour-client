import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import BookingListCard from './BookingListCard';

const BookingList = () => {
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/payments?email=${user?.email}`

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <p className='text-2xl font-bold'>Service List</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    payments.map(payment => <BookingListCard
                        key={payment._id}
                        payment={payment}
                    ></Booking>)
                }
            </div>
        </div >
    );
};

export default BookingList;