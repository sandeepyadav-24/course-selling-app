import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const CourseUpdate = (props) => {
  //console.log(props.course.title);
  const [title, setTitle] = useState(props.course.title);
  const [description, setDescription] = useState(props.course.description);
  const [price, setPrice] = useState(props.course.price);
  const [imageLink, setImageLink] = useState(props.course.imageLink);
  const [published, setPublished] = useState(props.course.published);

  /*console.log(description);
  console.log(price);
  console.log(imageLink);
  console.log(published);*/
  const endPoint = props.id;
  //console.log(endPoint);
  // PUT URL
  const putUrl = `http://localhost:3000/admin/courses/${endPoint}`;

  return (
    <div style={{ width: "600px" }}>
      <Card>
        <div style={{}}>
          <div style={{ padding: "50px" }}>
            <TextField
              value={title}
              fullWidth={true}
              id="username"
              label="Title"
              variant="outlined"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <br />

            <TextField
              value={description}
              fullWidth={true}
              id="password"
              label="Description"
              variant="outlined"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
            <TextField
              value={price}
              fullWidth={true}
              id="username"
              label="Price"
              variant="outlined"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
            <TextField
              value={imageLink}
              fullWidth={true}
              id="username"
              label="ImageLink"
              variant="outlined"
              onChange={(e) => setImageLink(e.target.value)}
            />
            <br />
            <br />
            <TextField
              value={published}
              fullWidth={true}
              id="username"
              label="Published"
              variant="outlined"
              onChange={(e) => setPublished(e.target.value)}
            />
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => {
                const courseUpdate = {
                  title: title,
                  description: description,
                  price: price,
                  imageLink: imageLink,
                  published: published,
                };

                // PUT OPTION
                const putOption = {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + props.token,
                  },
                  body: JSON.stringify(courseUpdate),
                };
                // FETCH

                fetch(putUrl, putOption)
                  .then((res) => {
                    console.log("RH");
                    return res.json();
                  })
                  .then((data) => {
                    console.log(data);
                    window.location.reload();
                  });
              }}
            >
              Update Course
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseUpdate;
