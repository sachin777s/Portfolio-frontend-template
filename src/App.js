import Navbar from "./conponents/Navbar/Navbar";
import "./App.css"
import Intro from "./conponents/Intro/Intro";
import Services from "./conponents/Services/Services";
import { Experience } from "./conponents/Experience/Experience";
import Work from "./conponents/Work/Work";
import { Portfolio } from "./conponents/Portfolio/Portfolio";
import Testimonials from "./conponents/Testimonials/Testimonials";
import { Contact } from "./conponents/Contact/Contact";
import Footer from "./conponents/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background: darkMode? "black" :"white",
      color:  darkMode? "white" :"black"
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
