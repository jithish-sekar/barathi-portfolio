import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import about from './about';
import Landingpage from './landingpage';




const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/about" component={about}/>
    </Switch>

)
export default withRouter(Main);

