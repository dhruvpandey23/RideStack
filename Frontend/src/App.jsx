import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Start from './pages/Start.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignup from './pages/UserSignup.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignup from './pages/CaptainSignup.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import UserLogout from './pages/UserLogout.jsx'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper.jsx'
import CaptainLogout from './pages/CaptainLogout.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path ="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/logout'
          element={<UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
          } />
          <Route path="/captain-home" element={
          <CaptainProtectedWrapper>
            <Home />
            </CaptainProtectedWrapper>
        } />
        <Route path="/captain/logout" element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
            </CaptainProtectedWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App
