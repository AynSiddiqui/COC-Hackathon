import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <div>
            <div className="h-screen bgimage flex justify-center items-center ">
                <div className="bg-white w-[500px] h-[540px] rounded-3xl flex flex-col space-y-10 justifiy-center items-center">
                    <h1 className="text-4xl text-black font-bold mt-8">Log In</h1>
                    <form>
                        <div className="my-1">
                            <label htmlFor="email" className="text-xl text-purple-violent font-bold">Email: </label>
                            <p>(Use only VJTI Email)</p>
                            <div><input type="email" pattern=".+@[A-Za-z0-9.-]+\.vjti.ac.in" name="title" className="my-2 shadow-lg appearance border rounded-2xl w-96 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input></div>
                            
                        </div>
                        <div className="my-4">
                            <label htmlFor="password" className="text-xl text-purple-violent font-bold">Password: </label>
                            <div><input type="password" name="password" className="my-2 shadow-lg appearance-none border rounded-2xl w-96 py-2 px-3 text-gray-700 leading-tight hover:bg-red-600 hover:text-white focus:outline-indigo-100 focus:shadow-outline"></input></div>
                        </div>
                        <Link to='/'><button type="submit" className="inline-block px-6 py-2.5 bg-white text-pink-violent font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-red-600 hover:text-white hover:shadow-lg focus:bg-pink-violent focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-violent active:text-white active:shadow-lg transition duration-150 ease-in-out">Submit</button></Link>
                    </form>
                    <div className="my-2 text-white flex flex-col justify-center items-center space-y-1">
                        <p className="text-xl text-black">Don't have account?</p>
                        <Link to='/SignUp' className="text-2xl text-black text-center underline cursor-pointer hover:text-red-600">Create Account</Link>
                        <div><Link to='/' className="text-xl text-black text-center cursor-pointer hover:text-red-600">Home Page</Link></div>
                    </div>
                </div>
            </div>
        </div >
  );
}

export default Login;