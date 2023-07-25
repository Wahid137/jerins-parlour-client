import React from 'react';

const ManageService = () => {
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookins'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-sepia.vercel.app/bookings');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2>This is manage service</h2>
        </div>
    );
};

export default ManageService;