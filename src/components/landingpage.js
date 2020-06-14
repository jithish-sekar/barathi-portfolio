import React, { Component } from "react";
import Services from "./services";
class Landingpage extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <img 
        className="headerImg"
          src="purple.png"/> */}
        <div className="landingHead">
          <div className="landingPage">
            <h3 className="titltText">Hey there,</h3>
            <h2 className="titleName">I am Barathi H R</h2>
            <h3 className="javaDev">Java Developer</h3>
            <button className="landingButton">Hire Me</button>
            <a href="Resume 1.pdf">
              <button className="landingButton">Get CV</button>
            </a>
          </div>
          <div>
            <img className="bannerImage" src="banner-image.png" />
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}
export default Landingpage;
