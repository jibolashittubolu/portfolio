import React, { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './verifyEmail.css'
import axios from 'axios'

const VerifyEmail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // console.log(location.state)

  useEffect(() => {
    const checkIfYouShouldBeHere = () => {
      if(!location?.state?.email){
        return navigate('/register')
      }
    }
    checkIfYouShouldBeHere()
    // return () => {
    //   second
    // }
  }, [])

  const resendMail = async (e) => {
    e.preventDefault()
    try {
      // axios.post()
    } 
    catch (err) {
      
    }
  }
  
  return (
    <div className='verify-email'>
      <div className='verify-container'>
        <div>Verify-Email</div>
        <form>
          <div>
            <span>A link was sent to your email {' '}  
            </span>
            <strong>
              {location?.state?.email}
            </strong>
            <div>Please click the link in your mail inbox or mail spam to complete the process</div>
          </div>
          <div>Or you can </div>
          <details>
            <summary>
              Resend the link 
            </summary>
            <span>
            <input
            className='renter-input'
            type='text' />

            <button
            className='resend-button'>Resend</button>
            </span>
          </details>
          <div>or</div>
          <details>
            <summary
            onClick={() => navigate('/register')}>
              Restart Registration Process from scratch
            </summary>
          </details>

        </form>
      </div>
    </div>
  )
}

export default VerifyEmail