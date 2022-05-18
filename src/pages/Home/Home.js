import React from 'react';
import AddTaskModal from './AddTaskModal';
import TaskContainer from './TaskContainer';
import { PlusCircleIcon } from '@heroicons/react/solid';
const Home = () => {
    return (
        <>
            <h2 className='text-3xl text-center'>welcome to my page</h2>
            <TaskContainer></TaskContainer>
            <div className='flex justify-center'>
                <label for="my-modal-6" class="btn btn-primary modal-button fixed bottom-[20px]">Add Task</label>
            </div>
            <AddTaskModal></AddTaskModal>
        </>
    );
};

export default Home;