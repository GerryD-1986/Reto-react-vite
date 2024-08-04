import { createContext, useContext, useState } from "react";
import {createTasksRequest, getTasksRequest} from "../api/tasks";

const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
    const context = useContext(TaskContext);

    if(!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }

return context;

}

export function TaskProvider({children}){
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
     try{
        const res = await getTasksRequest()
        setTasks(res.error);
     }catch(error){
        console.error(error);
     }
    }
    
    const createTask = async (task) => {
       const res = await createTasksRequest(task)
       console.log(res)
    }


    return (
        
        <TaskContext.Provider value={{tasks, createTask, getTasks}}>
            {children}
        </TaskContext.Provider>
    )
}