import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
     <div className="header-wraper">
         <div className="main-info">
             <h1> RS D'Best PortFolio</h1>
             <Typed
               className="typed-text"
               strings={["Web Designer", "Web Developer", "Graphic Designer", "Blogger", "YouTuber", "Facebook SMM", "Google Adsense",]}
               typeSpeed={40}
               backSpeed={60}
               loop
             />
          <a href="#" className="btn-main-offer">Contact Me</a>
         </div>
     </div>
    )
}

export default Header
