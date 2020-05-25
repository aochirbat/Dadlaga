import React from 'react';
import DashboardNavBar from '../components/DashboardNavbar';
import { Fastfood, Accessibility,LocalHotel } from '@material-ui/icons';
import CustomizedDot from '../components/CustomizedDot';
import {AreaChart,YAxis,XAxis,CartesianGrid,Tooltip,Area,ResponsiveContainer,Legend} from 'recharts';
import 
{BrowserRouter as Router,Switch,Route}
from 'react-router-dom';
import {Avatar,Chip,Paper,makeStyles,Typography,Grid} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    height:'100%'
  },
}));
const data = [
  {
    "name": "Барс",
    "jin": 60,
    "undur": 160,
    "date":2
  },
  {
    "name": "Барс",
    "jin": 98,
    "undur": 120,
    "date":14,

  },
  {
    "name": "Барс",
    "jin": 23,
    "undur": 174,
    "date":16
  },
  {
    "name": "Барс",
    "jin": 50,
    "undur": 15,
    "date":25
  },
  {
    "name": "Барс",
    "jin": 124,
    "undur": 23,
    "date":124
  },
  {
    "name": "Барс",
    "jin": 23,
    "undur": 175,
    "date":23
  },

 
]

export default function FullWidthGrid(){
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Paper style={{marginTop:20,height:'100%'}}> 
     <Grid container  direction='column' justify='flex-start'>
       <Grid item xs={12} direction='row' justify='flex-start' alignItems='flex-start'>  
           <Grid item xs container> 
            <a style={{color: '#21CBF3', fontSize: '40px',fontWeight:'bold'}}>Statistic</a>  
           </Grid> 
           <Grid> 
            
           </Grid>   
       </Grid>
       <Grid item xs={12}>   
           <ResponsiveContainer width={'100%'} height={100}>        
              <AreaChart
                    data={data}
                    margin={{
                      top: 10, right: 30, left: 0, bottom: 0,
                    }}
                  >
                 <CartesianGrid strokeDasharray="1 3" />
                 <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3c8396" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#88d0e3" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f0886c" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#edac9a" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                 <Tooltip />
                 <Area type="monotone" stroke='#3f51b5' dot={{ stroke: '#21CBF3', strokeWidth: 12 }} strokeWidth={12} activeDot={{r: 8}} dataKey="jin" stroke="#a2fae7" fill="url(#colorUv)" fillOpacity={0.3} />
                 <Area type="monotone" dataKey="undur" dot={{ stroke: '#FF8E53', strokeWidth: 12 }}  strokeWidth={12} stroke="#fca088" fill="url(#colorPv)" fillOpacity={0.3} />
              </AreaChart>  
            </ResponsiveContainer>
      </Grid>
        <Grid item xs={12} direction='row' justify='flex-start'>   
            <Chip variant="outlined" style={{marginLeft:5, background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }} label="Exersice " avatar={<Avatar style={{backgroundColor:'white'}}><Accessibility  style={{ color:'#21CBF3' }}/></Avatar>} />           
            <Chip variant="outlined" style={{marginLeft:9, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',}} label="Meals" avatar={<Avatar style={{backgroundColor:'white'}}><Fastfood style={{color:'#FF8E53'}}/></Avatar>} />
            <Chip variant="outlined" style={{marginLeft:9, background:'linear-gradient(45deg, #32cd32 30%, #7cfc00 90%)', }} label="Sleep" avatar={<Avatar style={{backgroundColor:'white'}}>< LocalHotel style={{color:'#7cfc00'}} /></Avatar>} />   
         </Grid>
       </Grid>
    </Paper>
    </div>
  );
}