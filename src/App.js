import React from 'react';
import './App.css';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import HeaderComponent from "./components/headerComponent"
import Landingpage from './components/landingpage';
const App = (props) => {
  return (
    <div>
      <HeaderComponent history={props.history} />
      
      <Main />
    </div>

  );
}

export default withRouter(App);
