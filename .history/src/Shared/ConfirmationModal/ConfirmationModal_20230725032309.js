import React from 'react';

const ConfirmationModal = ({ title, successButtonName, message, closeModal, modalData, successAction }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)}
                            htmlFor="confirmation-modal"
                            className="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} className="btn btn-outline">cancel</button>
                    </div>
                </div>
            </div>
        </div>
        {/* Open the modal using ID.showModal() method */ }
<button className="btn" onClick={()=>window.my_modal_1.showModal()}>open modal</button>
<dialog id="my_modal_1" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
    );
};

export default ConfirmationModal;