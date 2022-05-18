import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useRef } from 'react';
const AddTaskModal = () => {
    const titleRef = useRef('');
    const descriptionRef = useRef('');
    const handle = () => {
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        if (title && description) {
            console.log(titleRef.current.value, descriptionRef.current.value);
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
                            <label onClick={handle} htmlFor="my-modal-6" className="btn">ADD</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTaskModal;