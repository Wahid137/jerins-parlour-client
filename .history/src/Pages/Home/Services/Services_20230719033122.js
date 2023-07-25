import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Shared/Loading/Loading';


import ServicesCard from './ServicesCard';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';



const Services = () => {
    const { data: services = [], isLoading } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch('https://jerins-parlour-server-sepia.vercel.app/services', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })


    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='p-0 my-10'>
            <div className='mx-auto mb-4 py-10 text-center w-1/2'>
                <p className='text-2xl font-bold'>Our Awesome <span className='text-primary'>Services</span></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services &&
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mt-24'>
                <PrimaryButton >Explore More</PrimaryButton>
            </div>

        </div >
    );
};

export default Services;