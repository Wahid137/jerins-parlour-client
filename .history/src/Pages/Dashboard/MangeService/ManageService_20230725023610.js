import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageService = () => {
    const { data: addServices = [], refetch } = useQuery({
        queryKey: ['addServices'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-sepia.vercel.app/addservice');
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