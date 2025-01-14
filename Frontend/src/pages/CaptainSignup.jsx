import React , { useState ,useContext} from 'react'
import { Link } from 'react-router-dom'  
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../../contexts/CaptainContext'


const CaptainSignup = () => {
 const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ firstName, setFirstname ] = useState('')
    const [ lastName, setLastname ] = useState('')
    const [ userData, setUserData ] = useState({})
    const [ color, setColor ] = useState('')
    const [ vehicleType, setVehicleType ] = useState('')
    const [ capacity, setCapacity ] = useState('')
    const [ plate , setPlate ] = useState('')
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
    const submitHandler = async (e) => {
      e.preventDefault();
  
      const newCaptainData = {
        email: email,
        password: password, 
        fullName: {
          firstName: firstName, 
          lastName: lastName
        },
        vehicle: {
          color: color,
          plate: plate,
          capacity: capacity,
          vehicleType: vehicleType
        }

      }

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/captain/register`,
        newCaptainData
      );
  
      if (res.status === 201) {
        const data = res.data;
        console.log(data);
        // console.log(data.token)
        setCaptain(data.captain);
        localStorage.setItem("token", data.data.token);
      console.log( localStorage.getItem('token'));
        navigate("/captain-home");
      }
  
     
    
     console.log(userData)
      setEmail('')
      setPassword('')
      setFirstname('')
      setLastname('')
      setColor('')
      setVehicleType('')
      setCapacity('')
      setPlate('')
    }
    return (
      <div className="flex items-center  flex-col justify-center min-h-screen bg-gray-100">
      <form onSubmit={(e) => {
            submitHandler(e)
          }} className="flex  flex-col items-center justify-center p-4 w-full max-w-2xl mx-auto">
           <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
           <div className='flex gap-4 mb-7'>
        <input  
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base'
          required
          value={firstName}
              onChange={(e) => {
                setFirstname(e.target.value)
              }}
          type="name"
          placeholder='First Name'
        />
         <input  
          className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full lg:w-1/2 text-lg placeholder:text-base'
          required
          value={lastName}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
          type="name"
          placeholder='Last Name'
        />
        </div>
        <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
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

<h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Color'
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="text"
              placeholder='Vehicle Plate'
              value={plate}
              onChange={(e) => {
                setPlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-7'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              type="number"
              placeholder='Vehicle Capacity'
              value={capacity}
              onChange={(e) => {
                setCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
          </div>
  
        <button className='bg-[#111]  text-white font-semibold mb-3 py-2 px-4 rounded-lg w-full lg:w-1/2 text-lg  transition duration-300 placeholder:text-base'>
        
          Create Account
        </button>
      </form>
      <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
      <div className='w-full max-w-xl '>
          <Link 
            to='/signup'
            className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 mt-5 rounded-lg py-2 px-4 w-full text-lg placeholder:text-base'
          >Sign up as User</Link>
        </div>
        <div>
        <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>

    </div>
    )
}

export default CaptainSignup
