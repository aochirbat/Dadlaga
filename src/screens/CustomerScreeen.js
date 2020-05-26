import React from 'react';
import DashboardNavBar from '../components/DashboardNavbar';
import Dashboard from '../components/Dashboard';
import DashboardMygoals from './DashboardMygoals';
import DashboardStatistics from './DashboardStatistics';
import DashboardSchedule from './DashboardSchedule';
import DashBoardSettings from './DashBoardSettings';
import DashboarHome from './DashboardHome';
import 
{BrowserRouter as Router,Switch,Route}
from 'react-router-dom';
import {Container,Grid,Paper,makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    height:'100%'
  },
}));
export default function Customer(props){
  const classes = useStyles();
  return (
    <Router>
    <div className={classes.root}>
       <div style={{flex:1,flexDirection:'column'}}>
         <div className={classes.root}>
           <DashboardNavBar/>
         </div> 
         <Grid container direction="row"  xs={12} spacing={2} style={{marginTop:30 }}>
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
                   
                      <Switch>                                      
                                      <Route path={props.match.path} exact component={DashboarHome}/> 
                                      <Route path={`${props.match.path}/Statistic`} component={DashboardStatistics}/> 
                                      <Route path={`${props.match.path}/Schedule`}  component={DashboardSchedule}/>    
                                      <Route path={`${props.match.path}/Mygoals`} component={DashboardMygoals}/>    
                                      <Route path={`${props.match.path}/Settings`}  component={DashBoardSettings}/>                                                                                 
                      </Switch>
                            
                    
                 </div>
            </Grid>
            
          </Grid>    
        </div>
      </div>
   
    </Router>
  );
}