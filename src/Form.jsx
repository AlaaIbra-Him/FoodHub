import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from './Button';

// import "./Form.css"

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    function handleMySubmit() {
        navigate("/home");


    }
    return (
        <div className=" flex justify-center items-center h-screen min-h-screen bg-gradient-to-b from-green-900 to-gray-950">
            <form onSubmit={handleSubmit(handleMySubmit)} className='text-amber-50  flex flex-col gap-2 '>
                <div className='border-1 rounded-xl p-5 w-[30rem] flex flex-col justify-center items-center'>
                    <h1 className='text-4xl my-9 font-bold' >Sign In</h1>
                    <div className=''>
                        <label htmlFor="name">User Name</label>
                        <input className='text-gray-950 bg-amber-50 px-1 m-3' type="text" name='name'  {...register("name", {
                            required: {
                                value: true,
                                message: "this field is required"
                            },
                            minLength: { value: 5, message: "must be 5 characters or more" }
                        })} />
                        {errors.name && <p className="text-red-500" >{errors.name.message} </p>}
                    </div>

                    <div className='form__div'>
                        <label htmlFor="email">Email</label>
                        <input className='text-gray-950 bg-amber-50 px-1 m-3' type="text" name='name'  {...register("email", {
                            required: {
                                value: true,
                                message: "this field is required"
                            },
                            minLength: { value: 5, message: "must be 5 characters or more" },
                            pattern: {
                                value: /^(?=.*@)(?=.*\.com).+$/,
                                message: "must contain special characters and .com"
                            }
                        })} />
                        {errors.email && <p className="text-red-500">{errors.email.message} </p>}
                    </div>

                    <div className='form__div'>
                        <label htmlFor="password">Password</label>
                        <input className='text-gray-950 bg-amber-50 px-1 m-3' type="Password" name='password'  {...register("password", {
                            required: {
                                value: true,
                                message: "this field is required"
                            },

                            minLength: { value: 5, message: "must be 5 characters or more" },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*@).+$/,
                                message: "must contain upper,lowercase and special characters"
                            }
                        })} />
                        {errors.password && <p className="text-red-500">{errors.password.message} </p>}
                    </div>
                    <input className='px-4 font-bold py-1 bg-green-600 rounded my-2 ' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Form