import { Card, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { json } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";

///////////**************/ ACTUAL SIGN UP COMPONENT /**************/////////////////////////
const Signup = () => {
  const navigate = useNavigate();
  ///// USername State Change and Function
  const [name, setUsername] = useState("");
  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  ///// PAssword State Change and Function
  const [passcode, setPassword] = useState("");
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  /////////////// BUTTON CLICK HANDLER
  const clickHandler = () => {
    const username = name;
    const password = passcode;
    //// USER DATA FOR SENDING REQUEST
    const data = {
      username: username,
      password: password,
    };
    // URL
    const url = "http://localhost:3000/admin/signup";

    // FETCH FUNCTION
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const token = data.token;
        //localStorage.setItem("token", token);
        alert(data.message);
        navigate("/");
      });
  };
  /////////// RETURN FROM COMPOENENT
  return (
    // MAIN DIV
    <div style={{ paddingTop: "150px" }}>
      <center>
        <div style={{}}>
          <Typography>Welcome to Coursera. Sign up below</Typography>
        </div>
        <br />
        <div style={{ width: "400px" }}>
          <Card>
            <div style={{}}>
              <div style={{ padding: "50px" }}>
                <TextField
                  fullWidth={true}
                  id="username"
                  label="Username"
                  variant="outlined"
                  onChange={usernameChangeHandler}
                />
                <br />
                <br />

                <TextField
                  fullWidth={true}
                  id="password"
                  label="Password"
                  variant="outlined"
                  onChange={passwordChangeHandler}
                />
                <br />
                <br />
                <Button onClick={clickHandler} variant="contained">
                  Sign Up
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </center>
    </div>
  );
};

export default Signup;
