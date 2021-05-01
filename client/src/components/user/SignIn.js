import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();
  const [details, setDetails] = useState({ username: "", password: "" });
  const history = useHistory();
  const adminUser = {
    username: "vathsala",
    password: "vathsaladmin",
  };
  const [error, setError] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const Login = (details) => {
    console.log(details);

    if (
      details.username === adminUser.username &&
      details.password === adminUser.password
    ) {
      console.log("you have logged in");
      props.setUser({
        username: details.username,
      });
      props.setUserLoggedIn(true);
      window.localStorage.setItem("userLoggedin", true);
      history.replace("/");
    } else {
      console.log("Details not match");
      setError("Wrong credentials, try again");
    }
  };


  const handleSignIn = (event) => {
    Login(details);
    setAnchorEl(event.currentTarget);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined" margin="normal" required fullWidth id="username" label="User Name" 
            name="username" autoComplete="username" autoFocus
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            value={details.username}
          />
          <TextField variant="outlined" margin="normal" required fullWidth name="password"
            label="Password" type="password" id="password" autoComplete="current-password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit" fullWidth variant="contained" color="primary" aria-describedby={id}
            className={classes.submit} onClick={handleSignIn}> Sign In
          </Button>
          <Popover
            id={id} open={open} anchorEl={anchorEl} onClose={handleClose} 
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>{error}</Typography>
          </Popover>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2"> {"Don't have an account? Sign Up"} </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export { SignIn };