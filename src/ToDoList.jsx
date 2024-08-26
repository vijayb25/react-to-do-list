import React, { useState } from 'react';

function ToDoList() {
    
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [doneTasks, setDoneTasks] = useState([]);
    const [activeTab, setActiveTab] = useState("tasks");

    function addTask(){
        const newTask = {name: taskName};
        

        setTasks(prevTask => [...prevTask, newTask]);
        setTaskName("");
    }

    function handleTaskChange(e){
        setTaskName(e.target.value);
    }

    function markAsDone(index){
        const completedTask = tasks[index];
        setDoneTasks((prevDoneTasks) => [...prevDoneTasks, completedTask]);
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    }

    function removeDoneTask(index){
        setDoneTasks(prevDoneTasks => prevDoneTasks.filter((_, i) => i !== index));
    }

    return(
        <>
        <div className='mainBox'>
        <h1>To-Do-List</h1>
        
        <div className='taskInput'>
            <input type='text' value={taskName} onChange={handleTaskChange} placeholder='Enter task...'></input>
            <button onClick={addTask}>Add</button>
        </div>

        <div className="tabs">
            <button 
                className={activeTab === "tasks" ? "active" : ""} 
                onClick={() => setActiveTab("tasks")}
            >
                List Of Tasks
            </button>

            <button 
                className={activeTab === "doneTasks" ? "active" : ""} 
                onClick={() => setActiveTab("doneTasks")}
            >
                Finished Tasks
            </button>
        </div>

        {activeTab === "tasks" && (
            <div className='taskHolder'>
                <h2>List Of Tasks</h2>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <div>{task.name}</div> 
                            <div>
                                <button onClick={() => markAsDone(index)}>Finish</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )}

        {activeTab === "doneTasks" && (
            <div className='finishedTask'>
                <h2>Finished Tasks</h2>
                <ul>
                    {doneTasks.map((task, index) => (
                        <li key={index}>
                            <div>{task.name} </div>
                            <div><button onClick={() => removeDoneTask(index)}>Remove</button></div>
                        </li>
                    ))}
                </ul>
            </div>
        )}
        </div>
        </>
    )
}

export default ToDoList