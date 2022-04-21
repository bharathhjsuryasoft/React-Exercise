// Button Library used for customised Button
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

// Sign Up Button
const SignUpButton = styled(Button)<ButtonProps>(({ theme }) => ({
  marginTop: '5%',
  marginBottom: '5%',
  boxShadow: 'none',
  textTransform: 'none',
  textDecoration: 'none',
  width: '100%',
  height: '50px',
  borderRadius: '4px',
  color: '#8E90A6',
  backgroundColor: '#EBEBF0',
  fontSize: '16px',
  '&:hover': {
    boxShadow: 'none',
    textDecoration: 'none',
    color: '#FFFFFF',
    backgroundColor: '#6A39F1',
  },
}));

export default SignUpButton;
