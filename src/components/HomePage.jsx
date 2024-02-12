import { Button } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Button onClick={() => (window.location = "/courses")}>
        All Courses
      </Button>
      <Button onClick={() => (window.location = "/addcourses")}>
        Add Courses
      </Button>
      <Button onClick={() => (window.location = "/")}>Thinking...</Button>
    </div>
  );
};

export default HomePage;
