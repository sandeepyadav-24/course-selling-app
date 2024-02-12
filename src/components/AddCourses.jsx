import { Card, TextField, Button, Select, MenuItem } from "@mui/material";
import React from "react";
import BasicSelect from "./Select";
import { useState } from "react";
const AddCourses = () => {
  /// USE STATE FUNCTION INPUT BOXES
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [published, setPublished] = useState("");

  /// BUTTON CLICK HANDLER
  const clickHandler = () => {
    // INPUT DATA FROM FORM
    const data = {
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
      published: published,
    };

    // URL
    const url = "http://localhost:3000/admin/courses";

    // ACCessing The TOKEN Form Lcoal Storage
    const token = localStorage.getItem("token");

    // Fetch Request Data
    const fetchData = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + token,
      },
    };
    // FETCH FUNCTION
    fetch(url, fetchData)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <center>
        <div style={{ width: "600px" }}>
          <Card>
            <div style={{}}>
              <div style={{ padding: "50px" }}>
                <TextField
                  fullWidth={true}
                  id="username"
                  label="Title"
                  variant="outlined"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <br />

                <TextField
                  fullWidth={true}
                  id="password"
                  label="Description"
                  variant="outlined"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  fullWidth={true}
                  id="username"
                  label="Price"
                  variant="outlined"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  fullWidth={true}
                  id="username"
                  label="ImageLink"
                  variant="outlined"
                  onChange={(e) => setImageLink(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  fullWidth={true}
                  id="username"
                  label="Published"
                  variant="outlined"
                  onChange={(e) => setPublished(e.target.value)}
                />
                <br />
                <br />
                <Button variant="contained" onClick={clickHandler}>
                  Publish
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </center>
    </div>
  );
};
export default AddCourses;
