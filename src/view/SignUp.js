import Layout from "../components/Layout";
import { orange } from '@mui/material/colors';
import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import { FormLabel } from "@mui/material";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#002884'),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

const contentSignUp = (handleChange) => {
  const placeHolder = { 'aria-label': 'description' };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card sx={{ maxWidth: 800, maxHeight: 1000 }} variant="outlined">
        <CardContent>
          <Box mt={5} pl={8} pr={9} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>Welcome to <span style={{ color: orange[500] }}>Kerry Express</span></div>
            <div>
              <Grid container>
                <Grid item>
                  <Typography variant="caption" gutterBottom component="div" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    Have an Account ?
                  </Typography>
                </Grid>
                <Grid item md={12} sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'nowrap', }}>
                  <Typography variant="caption" gutterBottom component="div">
                    <p style={{ color: orange[500] }}>Sign in</p>
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Box>
          <Box pl={8} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Typography variant="h3" gutterBottom component="div">
              Sign Up
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>
              <FormControl fullWidth sx={{ m: 1, width: '500px' }}>
                <FormLabel sx={{ display: 'flex', justifyContent: 'flex-start' }}><b>Username and email</b></FormLabel>
                <OutlinedInput
                  aria-labelledby="radios"
                  placeholder="Username and email" inputProps={placeHolder}
                  onChange={handleChange('Username')}
                  startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth sx={{ m: 1, width: '500px' }}>
                <FormLabel sx={{ display: 'flex', justifyContent: 'flex-start' }}><b>Username and email</b></FormLabel>
                <OutlinedInput
                  placeholder="Username and email" inputProps={placeHolder}
                  onChange={handleChange('Username')}
                  startAdornment={<InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>}
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth sx={{ m: 1, width: '500px' }}>
                <FormLabel sx={{ display: 'flex', justifyContent: 'flex-start' }}><b>Phone</b></FormLabel>
                <OutlinedInput
                  placeholder="Phone" inputProps={placeHolder}
                  onChange={handleChange('Phone')}
                  startAdornment={<InputAdornment position="start"><LocalPhoneOutlinedIcon /></InputAdornment>}
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth sx={{ m: 1, width: '500px' }}>
                <FormLabel sx={{ display: 'flex', justifyContent: 'flex-start' }}><b>Password</b></FormLabel>
                <OutlinedInput
                  placeholder="Password" inputProps={placeHolder}
                  onChange={handleChange('Password')}
                  startAdornment={<InputAdornment position="start"><LockOutlinedIcon /></InputAdornment>}
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth sx={{ m: 1, width: '500px' }}>
                <FormLabel sx={{ display: 'flex', justifyContent: 'flex-start' }}><b>Confirm Password</b></FormLabel>
                <OutlinedInput
                  placeholder="Confirm Password" inputProps={placeHolder}
                  onChange={handleChange('Confirm Password')}
                  startAdornment={<InputAdornment position="start"><LockOutlinedIcon /></InputAdornment>}
                />
              </FormControl>
            </div>
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center' }}>
          <ColorButton>Sign up</ColorButton>
        </CardActions>
      </Card>
    </Box>
  )
};

const SignUp = () => {
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [values, setValues] = React.useState({
    Username: '',
    Email: '',
    Phone: '',
    Password: '',
    ConfrimPassword: ''
  });

  return (
    <div>
      <div className="background"></div>

      <div className="cardText">
        <Layout zIndex={2} element={contentSignUp(handleChange)} />
      </div>
    </div>
  );
};

export default SignUp;