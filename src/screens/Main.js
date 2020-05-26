import React from 'react';
import Home from './HomeScreen';
import Login from './loginScreen';

import Notif from  './notif';
import Customer from './CustomerScreeen';
import 
{BrowserRouter as Router,Switch,Route}
from 'react-router-dom';
function Main() {
  return (
    
          <Router>
             
             <Switch>
             <Route path="/" exact component={Home}/>         
             <Route path="/Login" component={Login}/>
             <Route path="/notif" component={Notif}/>
             <Route path="/Customer" component={Customer}/>
             </Switch>
          
              </Router>
     
  );
}

export default Main;
