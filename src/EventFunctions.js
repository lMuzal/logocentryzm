
const MenuClick = () =>{
  const menuBar = document.querySelector('.menu-bar');
  const hamburg = document.querySelector('.fa-bars');
  var x = menuBar;
  if (x.style.translate === "0px") {
    x.style.translate = "-1500px";
    hamburg.style.rotate = "z 0deg";
    } else {
      x.style.translate = "0px";
      hamburg.style.rotate = "z 360deg";
    }
}


const MenuListClick = () =>{
  const menuBar = document.querySelector('.menu-bar');
  const textVisibility = document.querySelector('.text');
  menuBar.style.translate = "-1500px";
  textVisibility.style.color = "white";

}

const OverlayVisible = () =>{
  const overlayElement = document.getElementById('overlay');
  overlayElement.style.display = "flex";
}

export {MenuClick, MenuListClick, OverlayVisible};