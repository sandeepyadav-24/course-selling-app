import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import CourseUpdate from "./CourseUpdate";
import CourseTable from "./CourseTable";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Course = () => {
  // GETTING PARAMS
  let { courseId } = useParams();

  // DEFINEING STATE FOR GETTING COURSE
  const [course, setCourse] = useState([]);
  // DEFINING STATE FOR LOADER
  const [loading, setLoading] = useState(true);

  // TOKEN
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/courses/" + courseId, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setCourse(res.data.course);
      });
  }, []);

  //
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <CourseTable
            title={course.title}
            description={course.description}
            price={course.price}
            imageLink={course.imageLink}
          />
        </div>
        <div>
          <CourseUpdate id={courseId} token={token} course={course} />
        </div>
      </div>
    </div>
  );
};

export default Course;
