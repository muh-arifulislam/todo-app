import React from 'react';
const TaskDetailModal = ({ task }) => {
    const { name, description, id } = task;
    return (
        <>
            <input type="checkbox" id="show-task-detail" class="modal-toggle" />
            <div class="modal modal-middle sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{name}</h3>
                    <p>{description}</p>
                    <div class="modal-action flex justify-center">
                        <label for="show-task-detail" class="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TaskDetailModal;