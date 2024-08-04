import { useEffect } from "react";
import { useTasks } from "../context/TasksContext"

export default function TasksPage(){
    const { getTasks, tasks } = useTasks();

    useEffect(()=>{
        getTasks()
    }, []);

    if(tasks.length == 0)return (<h1>No tasks</h1>) ;

    return (
        <div>{tasks.map((task)=> (
          <div key={task._id}>
             <h1>{tasks.title}</h1>
             <p>{tasks.description}</p>
          </div>

        ))}
            
        </div>
    );
}