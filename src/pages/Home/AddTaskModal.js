import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddTaskModal = ({ handleAddTask }) => {
    const [user] = useAuthState(auth);
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const handle = () => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        if (title && description && user) {
            const data = { name: title, description: description, email: user.email };
            handleAddTask(data);

        }
        // clear modal field 
        titleRef.current.value = '';
        descriptionRef.current.value = '';
    }
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <form>
                        <input ref={titleRef} type="text" placeholder="Type task title here" className="input input-bordered w-full max-w-lg" required />
                        <textarea ref={descriptionRef} className="textarea textarea-bordered w-full mt-[12px]" placeholder="Type task description here" required></textarea>
                        <div className="modal-action flex justify-center">
                            <label onClick={handle} htmlFor="my-modal-6" className="btn btn-primary">Complete</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTaskModal;