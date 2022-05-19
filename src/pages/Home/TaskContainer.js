import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Task from './Task';
import TaskDetailModal from './TaskDetailModal';
import AddTaskModal from './AddTaskModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;
const TaskContainer = () => {
    const [user] = useAuthState(auth)
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({});
    const [dep, setDep] = useState('');
    const notify = (text) => toast(text);
    useEffect(() => {
        fetch(`https://damp-scrubland-37754.herokuapp.com/task?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [dep]);
    const handleDeleteTask = (id) => {
        const remainTasks = tasks.filter(task => task._id !== id);
        // setTasks(remainTasks);
        axios.delete(`https://damp-scrubland-37754.herokuapp.com/task/${id}`)
            .then(function (response) {
                console.log(response);
                setTasks(remainTasks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleAddTask = (data) => {
        const description = data.description;
        axios.put('https://damp-scrubland-37754.herokuapp.com/task', data)
            .then(function (response) {
                console.log(response);
                // set inserted id for tasks useEffect dependancy 
                setDep(response.data.insertedId);
                notify(description);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <ToastContainer />
            <section className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[50px] gap-[20px] lg:mx-[150px] mx-[20px]'>
                {
                    (tasks) && tasks.map(task => <Task task={task} key={task._id} handleDeleteTask={handleDeleteTask} setTask={setTask}></Task>)

                }
            </section>
            <TaskDetailModal task={task}></TaskDetailModal>
            <AddTaskModal handleAddTask={handleAddTask} setTask={setTask}></AddTaskModal>
        </>
    );
};

export default TaskContainer;