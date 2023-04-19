import React, { useContext } from 'react'
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themeContext } from '../../Context'

const Toggle = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = ()=>{
    theme.dispatch({type:'toggle'})
  }

  return (
    <div className="toggle" onClick={handleClick}>
     {
        darkMode?<Sun/>:<Moon/>
     }
    </div>
  )
}

export default Toggle