import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import Dashboard from '../components/Dashboard';
import 
{BrowserRouter as Router,
    Switch,
    Route}
from 'react-router-dom';
export default function userScreen(){
    return(
        <Router>
             <DashboardNavbar/>
             <Dashboard/>
        </Router>
    );
}