import React, { Component } from "react";
class HeaderComponent extends Component{

about(){
  this.props.history.push('/about')
}
home(){
  this.props.history.push('/')
}
render(){
  return (
    <React.Fragment>
      <div className="headerComponent">
        <div className="headerList">
            <span
            onClick={()=>this.home()}
            >Home</span>
            <span
            onClick={()=>this.about()}
            className="">About</span>
            <img className="logo" src="logo.png"></img>
            <span >Portfolio</span>
            <span >Github</span>
         
        </div>
      </div>
    </React.Fragment>
  );
}
}

export default HeaderComponent;
