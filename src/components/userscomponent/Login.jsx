import React, { useEffect, useState } from 'react'
import axios from 'axios'

function LoginForm () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      setIsLoggedIn(true)
    }
  }, [])

  const handleLogin = async e => {
    e.preventDefault()
    let url = 'https://myportfolioapi-8vku.onrender.com'
    try {
      const response = await axios.post(`${url}/auth/login`, {
        email,
        password
      })

      const data = response.data

      if (response.status === 200) {
        alert('Login successful!')
        localStorage.setItem('accessToken', data.access_token)
        localStorage.setItem('userId', data.user._id)
        localStorage.setItem('userRole', data.user.role)
        localStorage.setItem('user', data.user)
        setIsLoggedIn(true)
        if (data.user.role === 'admin') {
          window.location.href = '/dashboard'
        } else {
          window.location.href = '/'
        }
      } else {
        setError(data.message)
      }
    } catch (error) {
      console.error('Error:', error)
      setError('wrong user or password.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userId')
    setIsLoggedIn(false)
    alert('Logged out successfully!')
  }

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isLoggedIn
        ? 'hidden'
        : 'block'}`}
    >
      <div className='flex items-center justify-center min-h-screen'>
        <div className='p-6 bg-white rounded-lg shadow-md w-96'>
          <span
            className='absolute top-0 cursor-pointer right-30'
            onClick={() => setIsLoggedIn(true)}
          >
            X
          </span>
          <h2 className='mb-4 text-2xl font-bold'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='block w-full mt-1 border-gray-300 rounded-lg form-input'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='password' className='block text-gray-700'>
                Password:
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className='block w-full mt-1 border-gray-300 rounded-lg form-input'
              />
            </div>
            {error &&
              <div className='mb-4 text-red-500'>
                {error}
              </div>}
            <button
              type='submit'
              className='px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600'
            >
              Login
            </button>
            <div className='mt-4'>
              <span className='text-gray-600'>Forgot your password?</span>
              <a href='/signup' className='ml-2 text-blue-500'>
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
