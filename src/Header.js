import {MenuClick} from "./EventFunctions.js";

const Header = () => {
  return ( 
    <div class="wrapper">
      <div class="header-wrap">
        <div class="menu-button" onClick={MenuClick}>
          <i class="fa fa-sharp fa-solid fa-bars"></i>
        </div>
        <div class="brand-name"><h1>Logocentryzm </h1></div>
        <div id="filler"></div>
      </div>
    </div>
   );
}
 
export default Header;

