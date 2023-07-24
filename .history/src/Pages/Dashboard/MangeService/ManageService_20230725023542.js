import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageService = () => {
    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/bookings');
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