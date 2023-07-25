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
            const data = res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <div>
                <p className='text-2xl font-bold'>Service List</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mt-24'>
                <PrimaryButton >Explore More</PrimaryButton>
            </div>

        </div >
    );
};

export default BookingList;