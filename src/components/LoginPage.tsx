import * as React from 'react';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// CSS Used for display of Lejit Logo
import Lejit from '../assets/images/Lejit.svg';
// Text Fields
import TextInputField from '../elements/textFields/TextInputField';
import Password from '../elements/textFields/Password';
import SignUpButton from '../elements/buttons/SignUpButton';
import ValidateEmail from '../config/auth/ValidateEmail';
import ValidatePassword from '../config/auth/ValidatePassword';

export default function SignIn() {
  const onFirstNameTextChange = (text: string): void => {
    console.log(text);
  };
  const onLastNameTextChange = (text: string): void => {
    console.log(text);
  };
  const onEmailTextChange = (email: string): void => {
    console.log(ValidateEmail(email));
  };
  const onPasswordChange = (password: string): void => {
    console.log(ValidatePassword(password));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
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
          <img src={Lejit} style={{ position: 'absolute', left: '120px' }} />
          <Typography
            variant="h1"
            sx={{ mt: 10, position: 'absolute', left: '120px' }}
          >
            Sign Up
          </Typography>
          <Typography
            sx={{ mt: 20, position: 'absolute', left: '120px' }}
            variant="caption"
          >
            Sign Up with Your Email
          </Typography>

          <Box
            sx={{ m: 1, mt: 25 }}
            component="form"
            noValidate
            onSubmit={handleSubmit}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row`',
              }}
            >
              <Box sx={{ mr: 1 }}>
                <TextInputField
                  label="First Name"
                  name="firstName"
                  onTextFieldValueChange={onFirstNameTextChange}
                />
              </Box>
              <Box sx={{ ml: 1 }}>
                <TextInputField
                  label="Last Name"
                  name="lastName"
                  onTextFieldValueChange={onLastNameTextChange}
                />
              </Box>
            </Box>
            <TextInputField
              label="Email Address"
              name="email"
              onTextFieldValueChange={onEmailTextChange}
            />
            <Password onPasswordValueChange={onPasswordChange}></Password>
            <SignUpButton type="submit">Sign Up</SignUpButton>

            <Grid container sx={{ ml: '20%' }}>
              <Grid item>
                <Typography variant="overline">
                  Already have an account ?,
                </Typography>
                <Link
                  href="#"
                  variant="overline"
                  color="primary"
                  sx={{ textDecoration: 'none' }}
                >
                  {' Sign In '}
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
          backgroundImage: `url(${process.env.PUBLIC_URL +
            '/login_cover.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
    </Grid>
  );
}
