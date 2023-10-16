import '../App.css'
import { TaskForm } from './TaskForm'
import { Task, TaskListProp } from '../types/types';
import { useEffect, useState } from 'react';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const LOCAL_STORAGE_KEY = 'jldTaskManager';
  
  // load from local if available
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [taskList, setTasks] = useState<Task[]>(storage !== null && storage !== "undefined"? JSON.parse(storage) : []);

  function SaveToStorage() {
    // Save Data to Local Storage in JSON format
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
  }

  function AddTask(task:Task) {
    // Add new task to List
    if(taskList.length === 0)
    {
      setTasks([...taskList, task]); 
      return;
    }
    const max = taskList.reduce((maxValue, obj) => {
      return obj.id > maxValue ? obj.id : maxValue;
    }, taskList[0].id);

    task.id = max+1;
    setTasks([...taskList, task]); 
  }

  useEffect(() => {
    // save to storage when todos list is updated
    SaveToStorage();
  }, [taskList])

  function DeleteTask(id: number) {
    // Delete specified todo id
    const updatedTask = taskList.filter(task => task.id !== id);
    setTasks(updatedTask);
  }

  const taskProps : TaskListProp = {
    tasks: taskList,
    onDelete: DeleteTask
  };

  return (
    <>
        <TaskForm addTask={AddTask}/>
        <br/>
        <br/>
        <TaskList {...taskProps}/>
    </>
  )
}

export default App
