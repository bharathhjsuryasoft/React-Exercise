import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../assets/styles/style.css';

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* why 12  component and paper and elevation */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div className="logo"></div>

            <Typography
              style={{
                position: 'absolute',
                left: '100px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '34px',
                lineHeight: '64px',
                letterSpacing: '0.25px',
                color: '#1C1C28',
              }}
              mt={5}
            >
              Sign Up
              <Typography
                variant="subtitle1"
                component="div"
                style={{
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '28px',
                  letterSpacing: '0.3px',
                  color: '#555770',
                }}
              >
                Sign Up with Your Email
              </Typography>
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              style={{ marginTop: '150px' }}
            >
              <TextField
                style={{ width: '33%', left: '75px' }}
                margin="normal"
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
              <TextField
                style={{ marginLeft: '95px', width: '33%' }}
                margin="normal"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
              <TextField
                style={{ width: '70%', left: '75px' }}
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                style={{ width: '70%', left: '75px' }}
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                style={{
                  width: '70%',
                  height: '50px',
                  backgroundColor: '#EBEBF0',
                  color: '#8E90A6',
                  borderRadius: '4px',
                  boxShadow: 'none',
                  fontSize: '16px',
                  left: '75px',
                }}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container style={{ marginLeft: '25%' }}>
                <Grid
                  item
                  style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '24px',
                    letterSpacing: '0.3px',
                    color: '#555770',
                  }}
                >
                  {'Already have an account?,'}
                  <Link
                    href="#"
                    variant="body2"
                    style={{
                      fontFamily: 'Inter',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '14px',
                      lineHeight: '24px',
                      letterSpacing: '0.3px',
                      color: '#6A39F1',
                      textDecoration: 'none',
                    }}
                  >
                    {'Sign In'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + '/login_cover.jpg'
            })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
