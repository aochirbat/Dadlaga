import React from 'react';
import DashboardStatic from '../components/DashboardStatic';
import DashboardControl from '../components/DashboardControl';
import {Container,Grid,Paper,makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));
export default function DashboardHome(){
  const classes = useStyles();
  return (
    <Grid container direction='column' spacing={1}>
                                     <DashboardControl/>
                                      <DashboardStatic/>
        </Grid>
  );
}