import React from 'react';
import { makeStyles ,ThemeProvider} from '@material-ui/core/styles';
import {Grid , Paper} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
  paper1:{
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 150,
    padding: '0 30px',
  }

}));
  function DeepChild() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper1}>
            Theming
        </Paper>
    );
  }
const themepaper1 = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
const themepaper2={
  background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
};
const themepaper3={
  background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
}
export default function Control(){
  const classes = useStyles();

  return(
      <div className={classes.root}>
    <Grid 
    container 
    direction='column' 
    justify='flex-start'  
    spacing={1}>
        <Grid container direction='row' xs={12} spacing={1}>
         <Grid item xs>
           <ThemeProvider theme={themepaper1}>
            <DeepChild/>
           </ThemeProvider>
         </Grid>
         <Grid item xs>
           <ThemeProvider theme={themepaper2}>
             <DeepChild/>
           </ThemeProvider>
         </Grid>
          <Grid item xs>
            <ThemeProvider theme={themepaper3}>
               <DeepChild/>
            </ThemeProvider>
          </Grid>
        </Grid> 
     
    </Grid>
      </div>
  )
};