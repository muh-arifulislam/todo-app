import React from 'react';
import { TrashIcon } from '@heroicons/react/solid';
const Task = ({ task, handleDeleteTask, setTask }) => {
    const { name, description, id } = task;
    return (
        <div className="card w-100 bg-base-100 shadow-xl my-[20px] ">
            <div className="card-body flex-row justify-between ">
                <div>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <p className='mt-[10px]'>{description.slice(0, 80)}.....</p>
                </div>
                <div className="card-actions justify-center">
                    <button onClick={() => handleDeleteTask(id)} className="btn btn-primary">
                        <TrashIcon class="h-8 w-8 bg-none" />
                    </button>
                    <label onClick={() => setTask(task)} for="show-task-detail" class="btn modal-button">view</label>
                </div>
            </div>
        </div>
    );
};

export default Task;