import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import CalendarIcon from '@material-ui/icons/CalendarTodayOutlined';
import LogOutIcon from '@material-ui/icons/ExitToAppOutlined';
import { Grid, Container ,Paper } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: theme.spacing(6),
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }, 
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  sectionCalendar: {
    position: 'relative',
    display: 'block',
  },
  divIcon:{
    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
  },
  notifIcon:{
    display: 'block',
    height: '50%',
  },
  LogOutIcon:{
    display: 'block',
    height: '50%'
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="main">
        <Toolbar>
          <Grid item xs={3}>
          <Typography className={classes.title} variant="h5"  noWrap>
           SPORT <span>INDEX</span>
          </Typography>
          </Grid>
          <Grid item xs={3} >
          <div className={classes.sectionCalendar} >
            <TextField
              color="primary"
              id="date"
              label="Select Date"
              type="date"
              defaultValue="2020-05-20"
              InputLabelProps={{shrink: true,}}/>
          </div>
          </Grid>
          <Grid item xs={3}></Grid>
            <Grid item xs={3} direction="row-reverse" justify="flex-start" alignItems="flex-start">  
            <div className={classes.divIcon}>          
              <IconButton aria-label="show 4 new notifications" color='inherit'>
                <div className={classes.notifIcon}>
                <Badge badgeContent={4}>
                  <div >
                    <NotificationsIcon />
                  </div>
                </Badge>
                </div>
            </IconButton>
            
              <IconButton aria-label="Log out" color="inherit">
              <div className={classes.LogOutIcon}>
                <Badge >
                  <div>
                  <LogOutIcon/>
                  </div>               
                </Badge>
              </div> 
              </IconButton>
            </div>
              </Grid>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </div>
  );
}