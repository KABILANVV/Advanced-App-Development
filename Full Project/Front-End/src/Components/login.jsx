import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/login.css';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [response,setResponse]= useState(null);

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    if (!/\s/.test(newUsername) && newUsername.length >= 6 ) {
      setUsername(newUsername);
      setUsernameError('');
    } else {
      setUsernameError('Username should be between 6 and 12 characters and should not contain spaces.');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError('');
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!username) {
      setUsernameError('Please enter a username.');
    }
    if (!password) {
      setPasswordError('Please enter a password.');
    }

    if (username && password) {
      setUsernameError('');
      setPasswordError('');
      
      axios.post("http://127.0.0.1:8081/api/v1/auth/login", { email:username, password: password},event)
          .then((response) => {
              console.log(response);
              setResponse(response);
              
      localStorage.setItem('logged', true);
      localStorage.setItem('user', "admin");
              navigate("/admin/add");
          })
          .catch((error) => {
              // Handle error here, for example:
              console.error('Error registering user:', error);
              // You can also update state to display a user-friendly error message
          });
      console.log('Form submitted:', { username, password });
    }
  };

  return (
    <div className="loginmain">
      <div className="login">
        <div className="logincontainer">
          <h1 id="logtit">Login</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              className='textfieldlogin'
              id="username"
              label="Email"
              variant="filled"
              type="email"
              onChange={handleUsernameChange}
              required
            />
            <br />
            {usernameError && <p className="error-message">{usernameError}</p>}
            <br />
            <TextField
              className='textfieldlogin'
              id="password"
              label="Password"
              variant="filled"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <br />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <br />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </form>
          <p>
            Don't have an account? <Link to="/SignIn">Sign In</Link>
          </p>
        </div>
        <div className="loginimage"></div>
      </div>
    </div>
  );
}

export default Login;