import React, { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import TaskContainer from './TaskContainer';
import { PlusCircleIcon } from '@heroicons/react/solid';
import Header from './Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
const Home = () => {
    return (
        <div className='bg-neutral'>
            <Header></Header>
            <TaskContainer></TaskContainer>
            <div className='flex justify-center'>
                <label htmlFor="my-modal-6" className="btn btn-secondary text-white modal-button fixed bottom-[20px]">Add Task</label>
            </div>
        </div>
    );
};

export default Home;