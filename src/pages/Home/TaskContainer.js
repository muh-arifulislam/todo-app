import React, { useEffect, useState } from 'react';
import AddTaskModal from './AddTaskModal';
import Task from './Task';
import TaskDetailModal from './TaskDetailModal';
const TaskContainer = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({});
    useEffect(() => {
        fetch('tasks.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);
    const handleDeleteTask = (id) => {
        const remainTasks = tasks.filter(task => task.id !== id);
        setTasks(remainTasks);
    }
    return (
        <>
            <section className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[50px] gap-[20px] lg:mx-[150px] mx-[20px]'>
                {
                    tasks.map(task => <Task task={task} key={task.id} handleDeleteTask={handleDeleteTask} setTask={setTask}></Task>)
                }
            </section>
            <TaskDetailModal task={task}></TaskDetailModal>
            <AddTaskModal></AddTaskModal>
        </>
    );
};

export default TaskContainer;