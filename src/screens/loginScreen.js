import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import Data from '../Data.json';
import 
{BrowserRouter as Router,Route,Link as Linkdom}
from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  
  paper: {
    margin: theme.spacing(20,4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
}));


export default function SignIn() {
  const classes = useStyles();
  const [name,setName]=useState('');
  const [switched,setSwitched]=useState(true)
  const handleChange=(e)=>{
    setSwitched(e.target.checked)
  }
  const save = (e) => {
    Data.userinfo.name = name;
  }
  const saveName =(e)=>{
    setName(e.target.value)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Нэвтрэх
          
        </Typography>
        <form className={classes.form} noValidate>
        <FormControlLabel
        control={<Switch checked={switched} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="И-мэйл хаяг"
            name="email"
            autoComplete="email"
            autoFocus
            value={name}
            onChange={saveName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Код"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Сануулах" style={{color: 'black'}}
          />
          <Button
            type="submit"
            fullWidth
            // to="/Customer"
            // component={Linkdom}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={save}
          >
           Нэвтрэх
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              {"Кодоо мартсан?"}
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="body2">
                {"Бүртгүүлэх"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={100}>
      </Box>
    </Container>
  );
}