import './toggle.css'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'
// import { ThemeContext } from '../../contexts/context'
// import { useContext, useRef } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const Toggle = () => {
  // const theme = useContext(ThemeContext)
  // const darkMode = theme.state.darkMode
  const {theme, dispatch} = useTheme()

  const handleClick = () => {
    dispatch({type:'TOGGLE'})
  }

  // const toggleRef = useRef()
  // const animateToggleButtonOnHover = (mode) => {
  //   //comes from our preemptive knowledge of the size of the button and the position of where darkMode is
  //   // alert(darkMode)
  //   !darkMode && 
  //   (toggleRef.current.style.transform = `translateX(${-1.5}rem)`)

  //   // darkMode && 
  //   // (toggleRef.current.style.transform = `translateX(${0}rem)`)
  //   // toggleRef.current.style.transform = `translateX(${1.5}rem)`
  // }
  // const animateToggleButtonOnLeave = (mode) => {
  //   !darkMode && 
  //   (toggleRef.current.style.transform = `translateX(${0}rem)`)

  //   // darkMode && 
  //   // (toggleRef.current.style.transform = `translateX(${-1.5}rem)`)

  // }



  return (
    <div 
     className='toggle'
     onClick={() => handleClick()}
     > 
        <img src={sun} alt='' className='t-icon'/>
        <img src={moon} alt='' className='t-icon'/>
        <div 
        className='t-button' 
        style={{left: theme.darkMode ? '1.5rem' : 0}}
        ></div>
    </div>

  )
}

export default Toggle