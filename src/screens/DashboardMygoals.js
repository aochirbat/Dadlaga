import React, { useState } from 'react';
import { makeStyles, Paper,withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Container,Slider} from '@material-ui/core';
import {AreaChart,YAxis,XAxis,CartesianGrid,Tooltip,Area,ResponsiveContainer,Legend, Pie ,PieChart , Cell} from 'recharts';

const useStyles = makeStyles((theme) =>({
    root: {
        flexGrow: 1,
    }
}));
const data = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 500
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
]
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
    width:'80%'
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);


export default function (){
    const [value,setValue]=useState(2)
    const [event,setEvent]=useState([])
    const classes = useStyles();
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const marks = [
      {
        value: 2,
        label: 'Дасгал 1',
      },
      {
        value: 4,
        label: 'Дасгал 2',
      },
      {
        value: 6,
        label: 'Дасгал 3',
      },
      {
        value: 8,
        label: 'Дасгал 4',
      },
      {
        value: 10,
        label: 'Дасгал 5',
      },
    ];
    
    return(
      <div className={classes.root}>
        <Container maxWidth='lg'>
          <Typography variant="h5"  noWrap>
           Явц
          </Typography>
          <Paper>
              <PrettoSlider  aria-label="pretto slider" defaultValue={value}
              step={1}
              marks
              min={0}
              max={10} 
              onChange={handleChange}
              valueLabelDisplay="auto"
              marks={marks}             
              />
          </Paper>
        </Container>
      </div>
        
    )
}