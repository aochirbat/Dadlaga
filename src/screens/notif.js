import React from 'react';
import {Typography,Grid,Box,Paper,Link,Checkbox,FormControlLabel,TextField,CssBaseline,Button,Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Back from '../assets/loginbackground.png';
import RightImage from '../assets/bottom.png';
import HomeScreen from './HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Linkdom,
  useRouteMatch,
  useParams
} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${Back})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  left:{
    backgroundImage: `url(${RightImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NotifInSide() {
  const classes = useStyles();
  return (
      <Grid container component="main" className={classes.root}>
       <CssBaseline />
       <Grid item xs={12} sm={8} md={5} className={classes.left}  component={Paper} elevation={6} square>
        <div className={classes.paper}>
         
          <Typography component="h1" variant="h5">
            Notif
        
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Хэрэглэгчийн нэр"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Нууц үг"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Сануулах"
            />
            <Button
              type="submit"
              fullWidth
              to="/home"
              variant="contained"
              color="primary"
              component={Linkdom}
              className={classes.submit}
             // onClick={() =>{alert('toHome')}}
            >
              Нэвтрэх
            </Button>
            <Grid container >
              <Grid item xs>
                <Link href="#" variant="body2">
               
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Бүртгүүлэх ?"}
                </Link>
              </Grid>
            </Grid>
           
          </form>
        </div>
       </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
        
     </Grid>
    
  );
}
  