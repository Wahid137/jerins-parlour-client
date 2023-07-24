import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageService = () => {
    const { data: addservices = [], refetch } = useQuery({
        queryKey: ['addservices'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addservice', {
                headers:
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
            });
    const data = await res.json();
    return data;
}
    })
return (
    <div>
        <h2>This is manage service: {addservices.length}</h2>
    </div>
);
};

export default ManageService;