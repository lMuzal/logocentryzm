import videoBg from "./background_vid.mp4"

const Background = () => {
  return (  
          <>
          <div>
          <video src={videoBg} autoPlay loop muted />
          </div>
          <div id="backgroundOverlay">
            
          </div>
          </>
          );
}
 
export default Background;