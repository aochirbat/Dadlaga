import React from 'react';
import DashboardNavBar from '../components/DashboardNavbar';
import Dashboard from '../components/Dashboard';
import DashboardControl from '../components/DashboardControl';
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
    <Container maxWidth="lg">
       <Grid 
          container 
          direction='column' 
          justify="space-between"
          height="10%"  
          spacing={1}>
        <Grid item xs={12} spacing={1}>
          <DashboardNavBar/>
       </Grid> 
       <Grid item xs={12}  height="90%"  spacing={1}>
            <Grid container direction='row' spacing={5}>
                <Grid item xs={2}>                                  
                   <Grid container 
                        direction='column' 
                        spacing={1}>
                       <Dashboard  type={2}/>
                   </Grid>
                 </Grid>
                 <Grid item xs={10} className={classes.nemelt}>
                    <Grid container direction='column' spacing={1}>
                        <DashboardControl/>                       
                    </Grid>
                </Grid>
            </Grid>
         </Grid>
        </Grid>
      </Container>
  );
}