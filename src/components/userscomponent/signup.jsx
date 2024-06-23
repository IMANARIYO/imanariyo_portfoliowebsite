import "react-toastify/dist/ReactToastify.css";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignupForm() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();

  const handleSignup = async data => {
    const {
      fullNames,
      email,
      password,
      confirmPassword,
      phoneNumber,
      gender,
      image
    } = data;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', { autoClose: 30000 });
      return;
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('fullNames', fullNames);
      formData.append('phoneNumber', phoneNumber);
      formData.append('gender', gender);
      formData.append('image', image[0]);

      const response = await axios.post(
        'https://myportfolioapi-8vku.onrender.com/auth/signup',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      const responseData = response.data;
      if (response.status === 201) {
        toast.success('Signup successful!', {
          autoClose: 30000,
          onClose: () => {
            window.location.href = '/login'; // You can also use history.push('/login') if you have access to history object
          }
        });
      } else {
        toast.error(responseData.message, { autoClose: 30000 });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', { autoClose: 30000 });
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='p-6 bg-white rounded-lg shadow-md w-96'>
        <h2 className='mb-4 text-2xl font-bold'>Signup</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className='mb-4'>
            <label htmlFor='fullNames' className='block text-gray-700'>
              Full Names:
            </label>
            <input
              type='text'
              id='fullNames'
              name='fullNames'
              {...register('fullNames', { required: 'Full Names are required' })}
              className='block w-full mt-1 border-gray-300 rounded-lg form-input'
            />
            {errors.fullNames && <span className='font-bold text-red-500'>{errors.fullNames.message}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              autoComplete='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
              className='block w-full mt-1 border-gray-300 rounded-lg form-input'
            />
            {errors.email && <span className='font-bold text-red-500'>{errors.email.message}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='new-password'
              {...register('password', { required: 'Password is required' })}
              className='block w-full mt-1 border-gray-300 rounded-lg form-input'
            />
            {errors.password && <span className='font-bold text-red-500'>{errors.password.message}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='confirmPassword' className='block text-gray-700'>
              Confirm Password:
            </label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              autoComplete='password'
              {...register('confirmPassword', { required: 'Confirm Password is required' })}
              className='block w-full mt-1 border-gray-300 rounded-lg form-input'
            />
            {errors.confirmPassword && <span className='font-bold text-red-500'>{errors.confirmPassword.message}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='phoneNumber' className='block text-gray-700'>
              Phone Number:
            </label>
            <input
              type='text'
              id='phoneNumber'
              name='phoneNumber'
              {...register('phoneNumber', { required: 'Phone Number is required' })}
              className='block w-full mt-1 border-gray-300 rounded-lg form-input'
            />
            {errors.phoneNumber && <span className='font-bold text-red-500'>{errors.phoneNumber.message}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='gender' className='block text-gray-700'>
              Gender:
            </label>
            <input
              type='text'
              id='gender'
              name='gender'
              {...register('gender', { required: 'Gender is required' })}
              className='block w-full mt-1 border-gray-300 rounded-lg form-input'
            />
            {errors.gender && <span className='font-bold text-red-500'>{errors.gender.message}</span>}
          </div>
          <div className='mb-4'>
            <label htmlFor='image' className='block text-gray-700'>
              Profile Image:
            </label>
            <input
              type='file'
              id='image'
              accept='image/*'
              name='image'
              {...register('image', { required: 'Profile image is required' })}
              className='block w-full mt-1 border-gray-300 rounded-lg form-input'
            />
            {errors.image && <span className='font-bold text-red-500'>{errors.image.message}</span>}
          </div>
          <button
            type='submit'
            className='px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600'
          >
            Signup
          </button>
          <div className='mt-4'>
            <span className='text-gray-600'>Already have an account?</span>
            <Link to='/login' className='ml-2 text-blue-500'>
              Login
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignupForm;
