import React, { useContext } from 'react'
import { themeContext } from '../../Context'
import "./Experience.css"

export const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" name="Experience">
      <div className="achievement">
        <div className="circle" style={{color:!darkMode?"white":"black", backgroundColor:!darkMode?"black":"white"}} >8+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:!darkMode?"white":"black", backgroundColor:!darkMode?"black":"white"}}>20+</div>
        <span>Completed</span>
        <span>Project</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color:!darkMode?"white":"black", backgroundColor:!darkMode?"black":"white"}}>5+</div>
        <span>Companies</span>
        <span>Worked</span>
      </div>
    </div>
  )
}
