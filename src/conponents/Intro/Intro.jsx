import React, { useContext } from 'react'
import "./Intro.css"
import Gitgub from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
import Instagram  from "../../img/instagram.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji1 from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
 
function Intro() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color:darkMode?"white":""}}>Hey! I Am</span>
            <span>Deepak Sagar</span>
            <span style={{color:darkMode?"white":""}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi quos, necessitatibus labore error a ut natus optio repellat accusamus mollitia libero iusto, ipsam sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dolorum iure. Quisquam qui suscipit praesentium!
            </span>
        </div>
        <button className="button i-button">Hire me</button>
       <div className="i-icons">
        <img src={Gitgub} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
       </div>


        </div>
        <div className="i-right">
             <img src={boy} alt=""/>
             <img className='emoji' src={glassesimoji1} alt="" />
             <div style={{top:"-4%",left:"60%"}} className="floating-div">
              <FloatingDiv image={Crown} text1='Web'text2='Developer'/>
             </div>
             <div style={{top:"18rem",left:"0rem"}} className="floating-div">
             <FloatingDiv image={thumbup} text1='Best Design'text2='Award'/>
             </div>
        </div>
    </div>
  )
}

export default Intro