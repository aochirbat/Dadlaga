import React, { useEffect ,useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Button, Avatar , Paper , Grid ,Badge , Box} from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Data from '../Data.json';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import { grey } from '@material-ui/core/colors';
import uxceo from "../Images/Avatar1.png";
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link as Linkdom,
      useRouteMatch,
      useParams
    } from 'react-router-dom';
import dashboardStatistics from '../screens/DashboardStatistics';

const useStyles = makeStyles((theme) => ({
 root: {
    flexGrow:1,
    width:'100%',
    height:'100%'
 },
  profile: {
  },
  paper: {
      
  },
  userInfo:{
      textAlign: 'left',
      padding: theme.spacing(1),
  },
  userName:{
      fontFamily: 'Roboto',
      fontSize: 18,
  },
  info: {
      fontFamily: 'Roboto',
      fontSize: 12,
  },
  userAvatar:{    
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'left',
      flexGrow:1,
      height:120,
      width:'100%',      
  },
  editButton: {
      display: 'block',
      justifyContent: 'right',
      marginLeft: 'auto',
  },
  bodyIndex:{
        display: 'block',
        fontFamily: 'Roboto',
        textAlign: 'center',
        width: '100%',
  },
  userHeight:{
      textAlign: 'center',
      border: '1px grey'
  },
  userWidth:{
      textAlign: 'center',
      border: '1px grey'
  },
  avatar:{
    width:'60%',
  },
  editbtn:{
     top:0,
     right:0,
     width:'40%',
     alignItems:'top',
     justifyContent:'top'
  } 
}));
const StyledBadge = withStyles((theme) => ({
      badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          animation: '$ripple 1.2s infinite ease-in-out',
          border: '1px solid currentColor',
          content: '""',
        },
      },
      '@keyframes ripple': {
        '0%': {
          transform: 'scale(.8)',
          opacity: 1,
        },
        '100%': {
          transform: 'scale(2.4)',
          opacity: 0,
        },
      },
    }))(Badge);

  
export default function Dashboard(props){
  const [name,setName]=useState('');
  const [description,setDescription]=useState('')    
  useEffect(()=>{       
            setName(props.type==1?Data.userinfo.name:'Golden Gym')
            setDescription(props.type==1?'Male, 21 years old':'Fitness,Power,Yoga etc..')
  },[])  
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return( 
   <Paper style={{height:"100%"}}> 
    <div className={classes.root}>     
      <div>
        <div className={classes.userAvatar} >
           <div className={classes.avatar}>
               <StyledBadge
                overlap="circle"
               anchorOrigin={{
                vertical: 'bottom',
               horizontal: 'right',
            }}
            variant="dot"
            >
             <Avatar alt="Remy Sharp" src={uxceo} style={{height:110,width:110,margin:2,padding:2}}/>
               </StyledBadge>
            </div>
            <div className={classes.editbtn}>
                 <Button size="small" color="primary" className={classes.editButton}>Edit</Button>
            </div>
      </div>
            <div borderBottom={1} borderColor={grey[500]} className={classes.userInfo}>
      <a className={classes.userName}>{name}</a><br/>
      <a className={classes.info}>{description}</a>
            </div>
        </div>
        {props.type==1?  
             <Grid container xs={12} direction="row">
              <Grid item xs={6}>
                    <div className={classes.userHeight}>
                  <b style={{fontSize: '12px'}}>HEIGHT</b><br/>
                        <a style={{fontSize: '10px'}}>{Data.userinfo.height}</a>
                    </div>
              </Grid>
              <Grid item xs={6}>
                    <div className={classes.userWidth}>
                        <b style={{fontSize: '12px'}}>WIDTH</b><br/>
                        <a style={{fontSize: '10px'}}>{Data.userinfo.weight}</a>
                    </div>
              </Grid>           
           </Grid>:null
         }
        <Grid item xs={12}>
        <div>
          <List component="nav">
                  <ListItem button to="/Customer" component={Linkdom}>
                        <ListItemIcon>
                        <HomeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText  primary="Home" />
                  </ListItem>
                  <ListItem button button to="/Customer/Mygoals" component={Linkdom}>
                     <ListItemIcon>
                        <OutlinedFlagIcon/>
                     </ListItemIcon>
                         <ListItemText primary={props.type==1?"My Goals":"Our Goals"}/>
                   </ListItem>
                    <ListItem button button to="/Customer/Schedule" component={Linkdom}>
                      <ListItemIcon>
                        <DateRangeOutlinedIcon/>
                     </ListItemIcon>
                        <ListItemText primary="Schedule"/>
                  </ListItem>
                  <ListItem button to="/Customer/Statistic" component={Linkdom}>
                        <ListItemIcon>
                              <TimelineOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Statistics"/>
                  </ListItem>
                  <ListItem button button to="/Customer/Settings" component={Linkdom}>
                        <ListItemIcon>
                              <SettingsOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Settings"/>
                  </ListItem>
          </List>      
      </div>
        </Grid>
         <Grid item xs={12}>
            <div>
                  <Paper></Paper>
            </div>
         </Grid>
         
     </div>
        </Paper>
        
  );
}