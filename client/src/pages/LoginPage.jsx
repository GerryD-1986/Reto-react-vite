import {useForm} from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link, useNavigate} from "react-router-dom"
import { useEffect } from "react";

export default function LoginPage(){

const {register,
     handleSubmit,
    formState: {errors},
 } = useForm();
const {signin, errors: signinErrors, isAuthenticated} = useAuth();
const navigate = useNavigate()

const onSubmit = handleSubmit((data) => {
    signin(data);
});

useEffect(()=>{
  if(isAuthenticated)navigate("/tasks");
}, [isAuthenticated]);

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-violet-500 max-w-md w-full p-10 rounded-md">
            {
                signinErrors.map((error, i) => (
                    <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
                        {error}
                    </div>
                ))
             }
             <h1 className="text-2xl font-bold text-white">Login</h1>
           
            <form
            onSubmit={onSubmit}>
                
                <input type="email"  {...register("email", { required: true})}
                 className="w-full bg-white text-black px-4 py-2 rounded-lg my-2" 
                    placeholder="Email"
                 />
                {errors.email &&  (<p className="text-red-500">Username is required</p>)}
                <input type="password"  {...register("password", { required: true})}
                 className="w-full bg-white text-black px-4 py-2 rounded-lg my-2" 
                    placeholder="Password"
                 />
                 {errors.password &&  (<p className="text-red-500">password is required</p>)}
                <button type="submit">Login</button>
            </form>
             <p className="flex gap-x-2 justify-between">
                Don't have an account? <Link to="/register" className="text-sky-500">Sign up</Link>
             </p>
           
            </div>
        </div>
    )
}
