import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingList = () => {
    const { user } = useContext(AuthContext)
    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {

        }
    })
        .then(res => res.json())
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