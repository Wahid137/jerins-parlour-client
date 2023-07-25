import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';
import BookingListCard from './BookingListCard';

const BookingList = () => {
    const { user } = useContext(AuthContext)

    const url = `https://jerins-parlour-server-sepia.vercel.app/payments?email=${user?.email}`

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
        <div className="p-7">
            <p className='text-2xl font-bold mb-10'>Booking List</p>
            <div className='grid gap-y-5 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                    payments.map(payment => <BookingListCard
                        key={payment._id}
                        payment={payment}
                    ></BookingListCard>)
                }
            </div>
        </div >
    );
};

export default BookingList;