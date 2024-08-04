import {useForm} from "react-hook-form"
import { useTasks } from "../context/TasksContext";
import { useNavigate } from "react-router-dom";

export default function TaskFormPage(){

    const {register, handleSubmit} = useForm();
    const {createTask} = useTasks()
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        createTask(data)
        navigate('/tasks')
    })

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title"
                 {...register("title")}
                 className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md" 
                 autoFocus
                 />
                <textarea rows="3" placeholder="Description"
                {...register("description")}
                className="w-full bg-zinc-500 text-white px-4 py-2 rounded-md"
                ></textarea>
                <button>
                    Save
                </button>
            </form>
        </div>
    )
}