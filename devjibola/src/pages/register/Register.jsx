import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './register.css'

const Register = () => {
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)

    const {dispatch, register_pending} = useAuth()
    // console.log(register_pending)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            await axios.post('/register',{
                email: email,
                password: password
            })
        } 
        catch (error) {
            // console.log(error.response.data.message)
            //the above is the message we created in our error handler catcher at the backend
            if(error.response.data.message.split(' ')[0] === 'uu'){
                setError('Please enter the verification code sent to your email')
                return navigate('/register/verify', {state: {email: email}})
            }
            if(error.response.data.message.split(' ')[0] === 'ue'){
              setError('User already exists please login')
              return navigate('/login')
            }
            setError('An error occurred please retry')
        }
    }

  return (
    <div className="container">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <span className="formTitle">Lama Login</span>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submitButton">
              REGISTER
            </button>
          </form>
          {
            error &&
            <div
            style={{width:'100%', color:'red', textAlign:'center', marginTop: '2rem'}}><strong>
            {error}
            </strong></div>
          }

          <button
          className='login-button'
          onClick={() => navigate('/login')}>
            LOGIN
          </button>
        </div>
    </div>
  )
}

export default Register