import React from 'react';
import LoginPage from './LoginPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    );
  }
}

export default App;
