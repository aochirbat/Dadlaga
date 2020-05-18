import React from 'react';
import Home from './HomeScreen';
import Login from './loginScreen';
import Navbar from '../components/Navbar';
import Notif from  './notif';
import 
{BrowserRouter as Router,Switch,Route}
from 'react-router-dom';
function Main() {
  return (
    
          <Router>
 
             <Navbar/>
                  

             <Switch>
             <Route path="/" exact component={Home}/>         
             <Route path="/Login" component={Login}/>
             <Route path="/notif" component={Notif}/>
            
             </Switch>
          
              </Router>
     
  );
}

export default Main;
