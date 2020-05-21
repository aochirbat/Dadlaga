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
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
 root: {
   flexGrow: 1,
 },
  paper: {
    width: 150,
    padding: 50,
    position:'absolute',
  },
  

}));
export default function Dashboard(){
  const classes = useStyles();
  return( 
  <div className={classes.root}>
    <div>
          <Paper className={classes.paper}></Paper> 
    </div>
  </div>


  );
};