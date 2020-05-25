import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import {Container} from '@material-ui/core';
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


export default function (){
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <Container maxWidth='sm'>
          <Paper>Schedule</Paper>
        </Container>
      </div>
        
    )
}