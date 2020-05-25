import React from 'react';
import DashboardNavBar from '../components/DashboardNavbar';
import Dashboard from '../components/Dashboard';
import DashboardStatic from '../components/DashboardStatic';
import DashboardControl from '../components/DashboardControl';
import dashboardStatistics from '../components/dashboardStatistics'
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
       <div style={{flex:1,flexDirection:'column'}}>
         <div style={{flexGrow:1}}>
           <DashboardNavBar/>
         </div> 
         <Grid container direction="row"  xs={12} spacing={2}>
                {/* left dashboard */}
                <Grid item xs={2}>
                 <div style={{flexDirection:'row'}}>                                 
                    <div style={{flexDirection:'row',width:'100%',marginTop:50}}>                       
                       <Dashboard  type={2}/>
                   </div>
                 </div>
                 </Grid>
                 {/* statistic side */}
                 <Grid item xs={10}>
                 <div style={{flex:1,flexDirection:'row',marginTop:50}}>      
                    <Grid container direction='column' spacing={1}>
                                      <DashboardControl/>
                                      <DashboardStatic/>
                            
                    </Grid>
                 </div>
            </Grid>
            
        </Grid>
      </div>
    </div>
  );
}