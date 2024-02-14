import React, { useState } from "react";
// import axios from "axios";

import "../Css/signup.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function SignUp() {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    
    

    if (username && email && password && password === confirmPassword) {
      // Add logic for user registration (e.g., send data to a server)

      console.log('Registration successful:', { username, email, password });
      axios.post("http://127.0.0.1:8081/api/v1/auth/register", {name: username, email:email, password: password,confirmPassword:confirmPassword})
          .then((response) => {
              console.log(response)
              navigate("/signin")
          })
          .catch((error) => {
              // Handle error here, for example:
              console.error('Error registering user:', error);
              // You can also update state to display a user-friendly error message
          });
    }


    // Handle the submit logic (axios or any other method)
    // axios(configuration)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error));
  };

  return (
    <div id="login-box">
    <div className="middle">
    <h1>Sign up</h1>
    
    <input type="text" name="username" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
    <input type="text" name="email" placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" name="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
    <input type="password" name="password2" placeholder="Retype password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
    <Button variant="contained" colorInherit
  sx={{
    borderRadius: 50
  }}
  onClick={handleSubmit}
>
  SiGNUP
</Button>
  </div>
  
 
</div>
  );
}
