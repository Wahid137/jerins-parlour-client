import React from 'react';

const BookingList = () => {
    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch('http://localhost:5000/services')
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