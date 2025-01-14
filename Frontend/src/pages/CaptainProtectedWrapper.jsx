import React, { useContext, useEffect, useState } from 'react'
import { CaptainDataContext } from '../../contexts/CaptainContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios' 

const CaptainProtectedWrapper = ({
    children
}) => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)


console.log(import.meta.env.VITE_BASE_URL)

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
        console.log(token)

        axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/captain/profile`, { 
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 201||response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {

                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }, [ token ])

    

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }



    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectedWrapper