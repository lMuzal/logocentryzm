import { Link } from "react-router-dom";
import {MenuListClick, OverlayVisible} from "./EventFunctions.js";


const Navbar = () => {
  return ( 
  <nav class="menu-bar">
    <ul>
      <li className="menu-button" onClick={MenuListClick}><Link to="/" style={{ color: "white", textDecoration: "none" }}>Start</Link></li>
      <li className="menu-button" onClick={MenuListClick}><Link to="/about" style={{ color: "white", textDecoration: "none" }}>O mnie</Link></li>
      <li className="menu-button" onClick={MenuListClick}><Link to="/appointments" style={{ color: "white", textDecoration: "none" }}>Wizyty</Link></li>
      <li className="menu-button" onClick={function() { MenuListClick(); OverlayVisible() }}><Link to="/materials" style={{ color: "white", textDecoration: "none" }}>Materiały</Link></li>
      <li className="menu-button" onClick={MenuListClick}><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Kontakt</Link></li>
    </ul>
  </nav> 
  );
}
 
export default Navbar;