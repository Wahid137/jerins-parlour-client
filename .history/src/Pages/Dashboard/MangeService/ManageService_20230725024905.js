import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ManageServiceCard from './ManageServiceCard';

const ManageService = () => {
    const { data: addservices = [], refetch } = useQuery({
        queryKey: ['addservices'],
        queryFn: async () => {
            const res = await fetch('https://jerins-parlour-server-sepia.vercel.app/addservice', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-2xl font-bold'>Manage Services</h2>
            <div className='grid gap-y-4 gap-x-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                {
                    addservices.map(addservice => <ManageServiceCard
                        key={addservice._id}
                        addservice={addservice}
                    ></ManageServiceCard>)
                }
            </div>

        </div>
    );
};

export default ManageService;