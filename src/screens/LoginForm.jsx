import React, { useState } from "react";
import Card from '../components/Card'
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./LoginForm.css";
import { BsCursor } from "react-icons/bs";

export default function LoginForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  
  return (
    <Card>
      <h1 className="title">Sign In</h1>
      <p className="subtitle">
      Don't have an account? <span onClick={
        ()=>{
          document.getElementById
        }
      }>Create your account,</span> it takes less than a minute.
      </p>
      <form >
               
        <div className="inputs_container">
          <p>Username (use: agent)</p>
          <input
            type="text"
          
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          { <p>Password (use: agent)</p> }
          <input
            type="password"
           /*placeholder="Password"*/
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
        </div>
        <input type="submit" value="LOGIN" className="login_button" />
        <div className="facebook">
          <FacebookIcon style={{marginTop:'9px'}}/>
          <input type="submit" value="LOGIN WITH FACEBOOK" className="facebook" />
         </div>
                
        <input type="submit" value="LOGIN WITH GOOGLE" className="google" />
         

      </form>
      <div className="link_container">
        <div href="" className="small">
          Lost your Password?
        </div>
      </div>
      <div className="icons">
        
        
      </div>
    </Card>
  );
}
