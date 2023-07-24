import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ManageServiceCard from './ManageServiceCard';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const ManageService = () => {
    const [deletingService, setDeletingService] = useState(null)

    const closeModal = () => {
        setDeletingService(null)
    }

    const { data: addservices = [], refetch } = useQuery({
        queryKey: ['addservices'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/addservice', {
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
                        setDeletingService={setDeletingService}

                    ></ManageServiceCard>)
                }
            </div>
            {
                deletingService && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingService.name} It can not be undone!`}
                    successAction={handleDeleteDoctor}
                    modalData={deletingService}
                    successButtonName='Remove'
                    closeModal={closeModal}
                ></ConfirmationModal>
            }

        </div>
    );
};

export default ManageService;