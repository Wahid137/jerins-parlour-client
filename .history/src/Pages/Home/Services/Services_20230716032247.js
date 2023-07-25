import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';
import ServicesCard from './ServicesCard';



const Services = () => {
    const { data: services = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch('https://jerins-parlour-server-sepia.vercel.app/services')
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='p-0 my-5'>
            <div className='mx-auto mb-4 text-center w-1/2'>
                <p className='text-2xl font-bold'>Our Awesome <span className='text-primary'>Services</span></p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div >
    );
};

export default Services;