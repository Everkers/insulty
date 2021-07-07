import React from "react"
import { LockClosedIcon } from "@heroicons/react/solid"
import useRegisterForm from "./useRegister"
import Ilustration from "assets/images/Saly-32.png"
import _ from "lodash"
import { useAuthContext } from "contexts/Authentication"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const Register = () => {
  const { error: backEndError } = useAuthContext()
  const { handleSubmit, isSubmitting, setFieldValue, errors } =
    useRegisterForm()
  const errorsMessages = _.values(errors)
  return (
    <motion.div
      initial={"hidden"}
      animate='enter'
      variants={{
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 200, y: 0 },
      }}
      exit={"exit"}
      transition={{ ease: "easeInOut", bounce: 0.25 }}>
      <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <img
              className='mx-auto h-52 w-52 w-auto'
              src={Ilustration}
              alt='Workflow'
            />
            <h2 className=' mt-3 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50'>
              Create a new account
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Or{" "}
              <Link
                to='/login'
                className='font-medium text-indigo-600 hover:text-indigo-500'>
                Log into your account
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className='mt-8 space-y-3'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Username
                </label>

                <input
                  id='username'
                  name='jsername'
                  type='username'
                  required
                  onChange={(e) => setFieldValue("username", e.target.value)}
                  className={`${
                    errors.username && "border-red-500 border-2"
                  } appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder='Username'
                />
              </div>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Password
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  autoComplete='current-password'
                  required
                  className={`${
                    errors.password && "border-red-500 border-2"
                  } appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                  placeholder='Password'
                />
              </div>
            </div>
            {errorsMessages && (
              <p class=' text-red-500 '>{errorsMessages[0]}</p>
            )}
            {_.isEmpty(errorsMessages) &&
            backEndError?.response.status === 400 ? (
              <p class=' text-red-500 '>This username is already exists </p>
            ) : null}
            <div>
              <button
                type='submit'
                className={` ${
                  isSubmitting && "opacity-50 cursor-not-allowed"
                } group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
                <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
export default Register
