import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavToPrev } from '../../hooks/useNavToPrev';
import './login.css'

const Login = () => {
    useNavToPrev('/login')

    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)


    const handleLogin = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            // throw new Error()
            // navigate('/home')
        } 
        catch (error) {
            setError(true)    
        }

    }

  return (
    <div className="container">
        <div className="login">
          <form onSubmit={handleLogin}>
            <span className="formTitle">Lama Login</span>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submitButton">
              Login
            </button>
          </form>
          {
            error &&
            <div
            style={{width:'100%', color:'red', textAlign:'center', marginTop: '2rem'}}><strong>An error occurred. Try again</strong></div>
          }

          <button
          className='register-button'
          onClick={() => navigate('/register')}>
            REGISTER
          </button>
        </div>
    </div>
  )
}

export default Login