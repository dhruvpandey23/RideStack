import React , { useState } from 'react'
import { Link } from 'react-router-dom' 

const CaptainLogin = () => {
  const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ captainData, setCaptainData ] = useState({})
    const submitHandler = async (e) => {
      e.preventDefault();
  
      const UserData = {
        email: email,
        password: password
      }
  
      setCaptainData(UserData)
  
     console.log(captainData)
      setEmail('')
      setPassword('')
    }
  return (
    <div className="flex items-center  flex-col justify-center min-h-screen bg-gray-100">
    <form onSubmit={(e) => {
          submitHandler(e)
        }} className="flex  flex-col items-center justify-center p-4 w-full max-w-2xl mx-auto">
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input  
        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base'
        required
        value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
        type="email"
        placeholder='email@example.com'
      />
      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
      <input 
        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base' 
        value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
        type="password" 
        placeholder='Password' 
      />

      <button className='bg-[#111]  text-white font-semibold mb-3 py-2 px-4 rounded-lg w-full lg:w-1/2 text-lg  transition duration-300 placeholder:text-base'>
      
        Login
      </button>
    </form>
    <p className='text-center'>Join as a feet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
    <div className='w-full max-w-xl '>
        <Link 
          to='/login'
          className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 mt-5 rounded-lg py-2 px-4 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
      </div>
  </div>
  )
}

export default CaptainLogin
