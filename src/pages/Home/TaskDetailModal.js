import React from 'react';
const TaskDetailModal = ({ task }) => {
    const { name, description, id } = task;
    return (
        <>
            <input type="checkbox" id="show-task-detail" className="modal-toggle" />
            <div className="modal modal-middle sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p>{description}</p>
                    <div className="modal-action flex justify-center">
                        <label htmlFor="show-task-detail" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskDetailModal;