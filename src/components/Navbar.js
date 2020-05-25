import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from '@material-ui/core/Button';

import { Container, Grid } from '@material-ui/core';
import 
{BrowserRouter as Router,Switch,Route,Link as Linkdom}
from 'react-router-dom';

import z from '../Images/5.png'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
   
   
        fontSize: '1.5rem',
      
        fontFamily: 'Segoe UI Black'
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          
        <Grid container direction="row" xs={12}>
                
                   
                    <Grid container xs={4} className={classes.paper}>
                      <img src={z} width="150" heigth="100"/>
                      </Grid>
      
                      <Grid container xs={4} direction="row" className={classes.paper} justify="flex-end"
              alignItems="center">
                            <Grid item xs={4}  >
                              <Button  className={classes.title} color="secondary"  > 
                              Home
                          </Button>
                            </Grid>
                      
                      

                            <Grid item xs={4} >
                            <Button className={classes.title}  color="Secondary">
                            About
                              </Button>
                            </Grid>
                      
                      

                            <Grid item xs={4} >
                            <Button  className={classes.title} color="Secondary">
                            Support 
                            </Button>
                            </Grid>
                      </Grid>
          
                      
                      <Grid container xs={4} justify="flex-end"
              alignItems="center">
                      <IconButton to='/login' component={Linkdom}>
                        <AccountCircleOutlinedIcon fontSize='large'/>
                      </IconButton>
                      </Grid>

          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}