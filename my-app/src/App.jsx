import Topbar from "./components/topbar/Topbar"
import Contacts from "./components/contacts/Contacts"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Work from "./components/work/Work"
import Intro from "./components/intro/Intro"
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react";



function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections">  
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonials/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
