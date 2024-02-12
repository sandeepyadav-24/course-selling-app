import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
const AppBar = () => {
  const [name, setName] = useState(null);
  //const [token, setToken] = useState(null);
  const token = localStorage.getItem("token");
  if (token) {
    // Using USE_EFFECT FOR Running This Code One TIme
    useEffect(() => {
      // URL
      const url = "http://localhost:3000/admin/me";
      // OPTION
      const option = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      fetch(url, option)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setName(data.username);
          console.log(name);
        });
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography onClick={() => (window.location = "/")} variant="h4">
          Coursera
        </Typography>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "10px" }}>
            <Button
              onClick={() => (window.location = "/signup")}
              variant="contained"
            >
              {name}
            </Button>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Button
              onClick={() => {
                window.location = "/";
                localStorage.removeItem("token");
              }}
              variant="contained"
            >
              Log Out
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography onClick={() => (window.location = "/")} variant="h4">
          Coursera
        </Typography>
        <div style={{ display: "flex" }}>
          <div style={{ marginLeft: "10px" }}>
            <Button
              onClick={() => (window.location = "/signup")}
              variant="contained"
            >
              Sign Up
            </Button>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <Button
              onClick={() => (window.location = "/login")}
              variant="contained"
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    );
  }
};
export default AppBar;
