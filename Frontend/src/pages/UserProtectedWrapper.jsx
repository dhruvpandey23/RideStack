import React, { useContext, useEffect, useState } from 'react'
import { UserDataContext } from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
 
const UserProtectedWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserDataContext)
    const [ isLoading, setIsLoading ] = useState(true)
    console.log(token)

    useEffect(() => {
        if (!token) {
            navigate('/login')
        } 
    }, [ token ])


    return (
        <>
            {children}
        </>
    )
}

export default UserProtectedWrapper