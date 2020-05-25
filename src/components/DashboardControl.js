import React from 'react';
import { makeStyles ,ThemeProvider,useTheme} from '@material-ui/core/styles';
import {Grid , Paper, Icon, IconButton} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FitnessIcon from '../Images/icons/sport.png';
import mealIcon from '../Images/icons/meal.png';
import sleepIcon from '../Images/icons/sleep.png';
import neg from '../Images/slider/1.jpg';
import hoyr from '../Images/slider/2.jpg';
import guraw from '../Images/slider/3.jpg';
import { Pie, PieChart, Sector } from 'recharts';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const data02 = [
  {
    "name": "Group A",
    "value": 2400
  },
  {
    "name": "Group B",
    "value": 4567
  },
];
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
    borderRadius: 20,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  Goal:{
    textAlign: 'left',

  },
  iconFitness: {
    padding: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: '20px',
    width: '80px',
    height: '80px',
    
  },
  cardText:{
    textAlign: 'left',
    padding: theme.spacing(2),
  }
 
}));
  function DeepChild1() {
    const classes = useStyles();
    return (
    <Grid container direction="row" className={classes.paper1}>
      <Grid container xs={12} >
        <Grid item xs={5}>
          <div>
            <div style={{paddingLeft: 'right'}}>
              <img src={FitnessIcon} alt="logo" className={classes.iconFitness} />
            </div>
              <div className={classes.cardText}>
              <a style={{fontSize:'20px',fontWeight: 'bold'}}>10 Exercise</a><br/>
              <a style={{fontSize:'12px'}}>1 hour X minutes</a>
              </div>
          </div>
          <Grid item xs={7}>
              {/* <PieChart >
                <Pie data={data02} dataKey='value' cx='50%' cy='50%' innerRadius={50} outerRadius={70} fill='#ffffff' fill/>
              </PieChart> */}
          </Grid>
        </Grid>
       </Grid>
    </Grid>
        
    );
  }
  function DeepChild2() {
    const classes = useStyles();
    return (
      <Grid container direction="row" className={classes.paper1}>
      <Grid container xs={12} >
        <Grid item xs={5}>
          <div>
              <div >
                <img src={mealIcon} alt="logo" className={classes.iconFitness} />
              </div>
              <div className={classes.cardText}>
                <a style={{fontSize:'20px' , fontWeight:'bold'}}>6 Meals</a><br/>
                <a style={{fontSize:'12px'}}>1604.0 cal</a>
              </div>
            </div>
          <Grid item xs={7}>
            <div>
              {/* <PieChart >
                <Pie data={data02} dataKey='value' cx='50%' cy='50%' innerRadius={50} outerRadius={70} fill='#ffffff' fill/>
              </PieChart> */}
            </div>
          </Grid>
        </Grid>
       </Grid>
    </Grid>
    );
  }
  function DeepChild3() {
    const classes = useStyles();
    return (
      <Grid container direction="row" className={classes.paper1}>
        <Grid container xs={12} >
            <Grid item xs={5}>
          
            <div>
              <div >
                <img src={sleepIcon} alt="logo" className={classes.iconFitness} />
              </div>
              <div className={classes.cardText}>
                <a style={{fontSize:'20px' , fontWeight:'bold'}}>10 Hours</a><br/>
                <a style={{fontSize:'12px'}}>2 Day</a>
              </div>
            </div>
          
          <Grid item xs={7}>
              {/* <PieChart >
                <Pie data={data02} dataKey='value' cx='50%' cy='50%' innerRadius={50} outerRadius={70} fill='#ffffff' fill/>
              </PieChart> */}
          </Grid>
        </Grid>
       </Grid>
    </Grid>
    );
  }
  function DeepChild4() {
    const classes = useStyles();
    return (
      <Grid container direction="row" className={classes.paper1}>
        <Grid container xs={12} >
          
              <Grid item xs={5}>
            <div>
                <div>
                    <img src={sleepIcon} alt="logo" className={classes.iconFitness} />
                </div>
                <div className={classes.cardText}>
                    <a style={{fontSize:'20px' , fontWeight:'bold'}}>10 Hours</a><br/>
                    <a style={{fontSize:'12px'}}>2 Day</a>
                </div>
            </div>
            </Grid>
            <Grid item xs={7}>
              <div>
              {/* <PieChart width={500} height={20}>
                <Pie data={data02} dataKey='value' cx='50%' cy='50%' innerRadius={50} outerRadius={70} fill='#ffffff' fill/>
              </PieChart> */}
              </div>
            </Grid>
          
       
         </Grid>
      </Grid>
    );
  }
  
const themepaper1 = {
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
};
const themepaper2={
  background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};
const themepaper3={
  background:'linear-gradient(45deg, #32cd32 30%, #7cfc00 90%)',
}
const themepaper4={
  background:'linear-gradient(45deg, #ff6699 30%, #ff99bb 90%)',
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
 <Grid containerdirection='column' justify='flex-start'>
    <Grid container xs={12}>
        <Grid item xs>
            <div className={classes.Goal}>
                <a style={{color: '#03f0fe', fontSize: '11px'}}>GOAL</a><br/>
                <a style={{color: 'black', fontSize: '30px'}}>Build Muscles</a>
            </div>
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs>
         
        </Grid>
    </Grid>
    <Grid container xs={12}>
    <Carousel arrows 
    slidesPerPage={5}
    slidesPerScroll={1}
    animationSpeed={1000}
    autoPlay={2000}
    stopAutoPlayOnHover
    offset={50}
    itemWidth={350}
    clickToChange>
      <ThemeProvider theme={themepaper1}>
       <DeepChild1/>
       </ThemeProvider>
       <ThemeProvider theme={themepaper2}>
       <DeepChild2/>
       </ThemeProvider>
       <ThemeProvider theme={themepaper3}>
       <DeepChild3/>
       </ThemeProvider>
       <ThemeProvider theme={themepaper4}>
       <DeepChild4/>
       </ThemeProvider>
    </Carousel>
    </Grid>
</Grid>
      </div>
  )
};