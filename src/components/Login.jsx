import { Card, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { json } from "react-router-dom";
import React from "react";

///////////**************/ ACTUAL SIGN UP COMPONENT /**************/////////////////////////
const Login = () => {
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
    //console.log(`${username} , ${password}`);

    // URL
    const url = "http://localhost:3000/admin/login";
    // BODY
    const body = {
      username: username,
      password: password,
    };

    // OPTIONS OBJECT
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    // FETCH FUNCTION
    fetch(url, option)
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        localStorage.setItem("token", token);
        alert(data.message);
        window.location = "/";
      });
  };
  /////////// RETURN FROM COMPOENENT
  return (
    // MAIN DIV
    <div style={{ paddingTop: "150px" }}>
      <center>
        <div style={{}}>
          <Typography>Welcome back! Login Here</Typography>
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
                  Login In
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </center>
    </div>
  );
};

export default Login;
