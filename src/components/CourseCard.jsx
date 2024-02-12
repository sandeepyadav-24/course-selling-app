import { Button, Card, Typography } from "@mui/material";
import React from "react";

const CourseCard = (props) => {
  const tag = props.published ? "Listed" : "Not-Listed";

  return (
    <div>
      <Card
        style={{
          width: "300px",
          height: "450px",
          padding: "30px",
          margin: "30px",
        }}
      >
        <img
          src={props.imageLink}
          style={{ height: "250px", width: "300px" }}
        />
        <Typography style={{ fontWeight: "bold", fontSize: "140%" }}>
          {props.title}
        </Typography>
        <Typography style={{ fontWeight: "400" }}>
          {props.description}
        </Typography>
        <Typography style={{ fontWeight: "bold", fontSize: "120%" }}>
          Rs: {props.price}
        </Typography>
        <Button
          style={{ color: "green", borderColor: "green", borderWidth: "5px" }}
        >
          {tag}
        </Button>
      </Card>
    </div>
  );
};
export default CourseCard;
