import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './Login.css';
import { NavLink, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '860px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  glow: {
    width: "150px",
    borderRadius:"5px",
    marginLeft:"30%",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 5px 15px #e2405f",
    },
  },
}));

export default function LogIn(props) {
  const classes = useStyles();

  function onLogin(){
    props.onHome();
    props.onLoggedin();
  }

  function handleSubmit(){
    
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
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
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <NavLink to="/home" tag={Link} onClick={onLogin}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          </NavLink>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
            <NavLink to="/SignUp" tag={Link} onClick={props.onSignUp}>
            <Typography variant="body2" align="center">Don't have an account? SignUp. </Typography>
            </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      <NavLink to="/home" tag={Link} onClick={props.onHome} style={{ textDecoration: 'none' }}>
      <Typography variant="h4" align="center" className={classes.glow}>CorVito</Typography>
      </NavLink>
      </Box>
    </Container>
  );
}