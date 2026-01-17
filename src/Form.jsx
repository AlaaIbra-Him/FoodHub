import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function handleMySubmit() {
        navigate("/home");
    }

    return (
        <div className="flex justify-center items-center mt-16 h-[50%] bg-gradient-to-br from-green-900 via-gray-900 to-gray-950 px-4">
            <form onSubmit={handleSubmit(handleMySubmit)} className='w-full max-w-md'>

                {/* Card Container */}
                <div className='border-2 border-green-700 rounded-2xl p-8 bg-gray-800 shadow-2xl hover:border-amber-400 transition-colors duration-300'>

                    {/* Header */}
                    <div className='text-center mb-8'>
                        <h1 className='text-4xl md:text-5xl font-bold text-amber-50 mb-2'>Sign In</h1>
                        <p className='text-gray-400'>Welcome back to FoodHub</p>
                    </div>

                    {/* Username Field */}
                    <div className='mb-6'>
                        <label htmlFor="name" className='flex items-center gap-2 text-amber-50 font-bold mb-3'>
                            <FaUser size={16} className='text-green-500' />
                            User Name
                        </label>
                        <input
                            className='w-full text-gray-950 bg-gray-100 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-400 focus:outline-none transition-colors duration-300 font-medium'
                            type="text"
                            name='name'
                            placeholder='Enter your username'
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Username is required"
                                },
                                minLength: {
                                    value: 5,
                                    message: "Must be 5 characters or more"
                                }
                            })}
                        />
                        {errors.name && (
                            <p className="text-red-400 text-sm mt-2 font-medium">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className='mb-6'>
                        <label htmlFor="email" className='flex items-center gap-2 text-amber-50 font-bold mb-3'>
                            <FaEnvelope size={16} className='text-green-500' />
                            Email
                        </label>
                        <input
                            className='w-full text-gray-950 bg-gray-100 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-400 focus:outline-none transition-colors duration-300 font-medium'
                            type="email"
                            name='email'
                            placeholder='Enter your email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email format"
                                }
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-sm mt-2 font-medium">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className='mb-8'>
                        <label htmlFor="password" className='flex items-center gap-2 text-amber-50 font-bold mb-3'>
                            <FaLock size={16} className='text-green-500' />
                            Password
                        </label>
                        <input
                            className='w-full text-gray-950 bg-gray-100 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-400 focus:outline-none transition-colors duration-300 font-medium'
                            type="password"
                            name='password'
                            placeholder='Enter your password'
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                minLength: {
                                    value: 5,
                                    message: "Must be 5 characters or more"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).+$/,
                                    message: "Must contain uppercase, lowercase and special character"
                                }
                            })}
                        />
                        {errors.password && (
                            <p className="text-red-400 text-sm mt-2 font-medium">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        className='w-full px-4 py-3 font-bold text-gray-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg'
                        type="submit"
                    >
                        Sign In
                    </button>

                    {/* Footer */}
                    <p className='text-center text-gray-400 text-sm mt-6'>
                        Don't have an account? <span className='text-amber-400 cursor-pointer hover:text-amber-300'>Sign Up</span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Form