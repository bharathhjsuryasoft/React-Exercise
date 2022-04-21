import React, { ChangeEventHandler, Component } from 'react';
import TextField from '@mui/material/TextField';

interface TextInputFieldProps {
  label: string;
  name: string;
  onTextFieldValueChange(text: string): void;
}

const TextInputField = ({
  label,
  name,
  onTextFieldValueChange,
}: TextInputFieldProps) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // console.log(event.currentTarget.value);
    onTextFieldValueChange(event.currentTarget.value);
  }

  return (
    <div>
      <TextField
        sx={{ width: '100%' }}
        size="medium"
        margin="normal"
        label={label}
        name={name}
        onChange={handleChange}
        required
      />
    </div>
  );
};
export default TextInputField;
