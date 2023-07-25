import React from 'react';

const BookingList = () => {
    const { data:  = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch('https://jerins-parlour-server-sepia.vercel.app/services')
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