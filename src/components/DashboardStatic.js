import React from 'react';
import DashboardNavBar from '../components/DashboardNavbar';
import Dashboard from '../components/Dashboard';
import DashboardStatic from '../components/DashboardStatic';
import 
{BrowserRouter as Router,Switch,Route}
from 'react-router-dom';
import {Container,Grid,Paper,makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export default function FullWidthGrid(){
  const classes = useStyles();
  return (
    <div style={{width:'100%',height:'100%',flexGrow:1}}>
       
      </div>
  );
}