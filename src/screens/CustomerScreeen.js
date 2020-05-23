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
       <div style={{flex:1,flexDirection:'column'}}>
         <div style={{flexGrow:1}}>
           <DashboardNavBar/>
         </div> 
         <div style={{flexDirection:'row',width:'100%',height:'100%',display:'flex'}}>
                {/* left dashboard */}
                 <div style={{flexDirection:'row',width:'15%'}}>                                 
                    <div style={{flexDirection:'row',width:'100%',marginTop:50}}>                       
                       <Dashboard  type={2}/>
                   </div>
                 </div>
                 {/* statistic side */}
                 <div style={{flex:1,flexDirection:'row',marginTop:50}}>      
                    <Grid container direction='column' spacing={1}>
                      <Grid item xs={12}  >
                        <Paper className={classes.paper2}>daawdawdawdwao</Paper>
                      </Grid>
                      <Grid item xs={12}  >
                         <Paper className={classes.paper2}>Grid for ochiroo</Paper>
                      </Grid>
                    </Grid>
                 </div>
           
           </div>
         </div>
      </div>
  );
}