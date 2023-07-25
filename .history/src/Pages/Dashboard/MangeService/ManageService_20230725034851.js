import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ManageServiceCard from './ManageServiceCard';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';

const ManageService = () => {
    const [deletingService, setDeletingService] = useState(null)

    const closeModal = () => {
        setDeletingService(null)
    }

    const { data: addservices = [], refetch, isLoading } = useQuery({
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
    if (isLoading) {
        <Loading></Loading>
    }

    const handleDeleteService = service => {
        console.log(service)
        fetch(`https://jerins-parlour-server-sepia.vercel.app/service/${service._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Service ${service.name} deleted successfully!`)
                }
            })
    }

    return (
        <div className='p-7'>
            <h2 className='text-2xl font-bold mb-10'>Manage Services</h2>
            <div className='bg-secondary p-5 grid gap-y-4 gap-x-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                {
                    addservices.map(addservice => <ManageServiceCard
                        key={addservice._id}
                        addservice={addservice}
                        setDeletingService={setDeletingService}
                    ></ManageServiceCard>)
                }
            </div>

            {
                deletingService && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingService.name} It can not be undone!`}
                    successAction={handleDeleteService}
                    modalData={deletingService}
                    successButtonName='Remove'
                    closeModal={closeModal}
                    refetch={refetch}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageService;