import React from 'react'
import {useState} from 'react'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function ForgotPassword() {

  const [email, setEmail] = useState("");

  function onChange(e){
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot password</h1>
      <div className="flex justify-center flex-wrap items-center
      px-6 py-12 max-w-6xl mx-auto"
      >
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WuJA0fuB9P6_H0RDsThCZ6e-MxGNNhlC9w&usqp=CAU'
            alt="key"
            className="w-80 rounded-2xl h-80 mx-20"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <div className="mb-6">
              <input
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded
              transition ease-in-out"
                type="email"
                id="email"
                placeholder="Email Address"
                required={true}
                value={email}
                onChange={onChange}
              />
            </div>
            
            <div className="flex justify-between 
            whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have an account?
                <Link to="/sign-up"
                  className="text-red-600 hover:text-red-700
                transition duration-200 ease-in-out ml-1" >Register
                </Link>
              </p>
              <p className="mb-6">
                <Link to="/sign-in"
                  className="text-blue-600 hover:text-blue-900
                transition duration-200 ease-in-out "
                >
                  Sign in 
                </Link>
              </p>
            </div>
            <button className='w-full bg-blue-600
            text-white px-7 py-3 text-sm font-medium
            uppercase rounded shadow-md hover:bg-blue-700
            transition duration-150 ease-in-out
            hover:shadow-lg active:bg-blue-800' type='submit'>
                Send email to reset
            </button>
            <div className='flex items-center my-4 before:border-t  
            before:flex-1 before:border-gray-350
            after:border-t  
            after:flex-1 after:border-gray-350'>
              <p className='text-center font-semibold 
              mx-4'>
                OR 
              </p>
            </div>
            <OAuth/>
            </form>
        </div>
      </div>
    </section>
  )
}
