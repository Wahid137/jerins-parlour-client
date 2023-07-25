import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';

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
        }
    })




    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2>This is booking list</h2>
        </div>
    );
};

export default BookingList;