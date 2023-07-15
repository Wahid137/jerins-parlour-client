import { useQuery } from '@tanstack/react-query';
import ServiceCard from './serviceCard';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';

const Services = () => {
    const { data: services = [], refetch, isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch('http://localhost:5000/services')
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-0 my-5'>
            <div className='mx-auto mb-4 text-center w-1/2'>
                <p className='text-2xl font-bold'>Our Awesome <span className='text-primary'>Services</span></p>
                <h2 className="text-5xl font-semibold mb-3">Our Services Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;