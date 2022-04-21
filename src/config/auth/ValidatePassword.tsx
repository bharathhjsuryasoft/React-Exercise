export default function validateEmailAndPassword(password: string): boolean {
  // Regular Expression for password to check a password between 7 to 15 characters which contain at least one numeric digit and a special character
  const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  // Return true or false based on right format of password
  return regexPassword.test(password);
}
