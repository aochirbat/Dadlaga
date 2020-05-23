  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="main">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="main">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './screens/Main';
import {Container,Grid,Paper,makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper0: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height:50,
    color: theme.palette.text.secondary,
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height:100,
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: 'center',
    height:185,
    color: theme.palette.text.secondary,
  },
  dash:{
    backgroundColor:'grey'
  },
  nemelt:{
    backgroundColor:'blue'
  },
  nav:{
    backgroundColor:'yello',


  }
}));
export default function FullWidthGrid(){
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
       <Grid container direction='column' height="10%"  spacing={1}>
           <Grid item xs={12} className={classes.nav} >
              <Paper className={classes.paper1}>Grid for ochiroo</Paper>
           </Grid>
           <Grid item xs={12}  height="90%"  spacing={1}>
             <Grid container direction='row' spacing={1} >
                <Grid item xs={1}  >                                  
                    <Grid container direction='column' className={classes.dash} spacing={1}>
                        <Grid item xs={12}  >
                           <Paper className={classes.paper0}>Grid for ochiroo</Paper>
                         </Grid>
                         <Grid item xs={12}  >
                           <Paper className={classes.paper0}>Grid for ochiroo</Paper>
                         </Grid>
                         <Grid item xs={12}  >
                           <Paper className={classes.paper0}>Grid for ochiroo</Paper>
                         </Grid>
                         <Grid item xs={12}  >
                            <Paper className={classes.paper0}>Grid for ochiroo</Paper>
                         <Grid item xs={12}  >
                           <Paper className={classes.paper0}>Grid for ochiroo</Paper>
                         </Grid><Grid item xs={12}  >
                           <Paper className={classes.paper0}>Grid for ochiroo</Paper>
                         </Grid>
                         </Grid>
                    </Grid>
                  
                </Grid>
                 <Grid item xs={11} className={classes.nemelt}>
                   <Grid container direction='column' spacing={1}>
                       <Grid item xs={12}  >
                         <Paper className={classes.paper2}>Grid for ochiroo</Paper>
                       </Grid>
                       <Grid item xs={12}  >
                         <Paper className={classes.paper2}>Grid for ochiroo</Paper>
                       </Grid>
                    </Grid>
                 </Grid>
             </Grid>
           </Grid>
        </Grid>
    </Container>
  );
}
