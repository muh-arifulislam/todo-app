import React, { useState } from 'react';
import TaskContainer from './TaskContainer';
import Header from './Header';
const Home = () => {

    return (
        <div className=''>
            <Header></Header>
            <TaskContainer></TaskContainer>
            <div className='flex justify-center'>
                <label htmlFor="my-modal-6" className="btn btn-accent text-white modal-button fixed bottom-[20px]">Add Task</label>
            </div>
        </div>
    );
};

export default Home;