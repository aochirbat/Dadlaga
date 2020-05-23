import React from 'react';
import { makeStyles ,ThemeProvider,useTheme} from '@material-ui/core/styles';
import {Grid , Paper, Icon, IconButton} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
    padding: theme.spacing(10,0,10),
  },
  Goal:{
    textAlign: 'left',

  },
  slideButton:{
    marginBottom: theme.spacing(2),
  }

}));
  function DeepChild1() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper1}>
            Theming
        </Paper>
    );
  }
  function DeepChild2() {
    const classes = useStyles();
    return (
        <Paper className={classes.paper1}>
            Theming
        </Paper>
    );
  }
  function DeepChild3() {
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
  background:'linear-gradient(45deg, #32cd32 30%, #7cfc00 90%)',
}
export default function Control(){
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = ;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return(
      <div className={classes.root}>
    <Grid 
    container 
    direction='column' 
    justify='flex-start'>
          <Grid container xs={12}>
            <Grid item xs>
              <div className={classes.Goal}>
                <a style={{color: '#03f0fe', fontSize: '11px'}}>GOAL</a><br/>
                <a style={{color: 'black', fontSize: '30px'}}>Build Muscles</a>
              </div>
            </Grid>
            <Grid item xs>

            </Grid>
            <Grid item xs>
              <div className={classes.slideButton}>
               <IconButton>
                  <ArrowBackIosIcon fontSize='small'/>
               </IconButton>
               <IconButton>
                  <ArrowForwardIosIcon fontSize='small' />
               </IconButton>
              </div>
            </Grid>
          </Grid>
        <Grid container direction='row' xs={12} spacing={1}>
         <Grid item xs>
           <ThemeProvider theme={themepaper1}>
            <DeepChild1/>
           </ThemeProvider>
         </Grid>
         <Grid item xs>
           <ThemeProvider theme={themepaper2}>
             <DeepChild2/>
           </ThemeProvider>
         </Grid>
          <Grid item xs>
            <ThemeProvider theme={themepaper3}>
               <DeepChild3/>
            </ThemeProvider>
          </Grid>
        </Grid> 
     
    </Grid>
      </div>
  )
};