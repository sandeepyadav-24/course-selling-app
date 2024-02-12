import { useEffect, useState } from "react";
import React from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [allcourse, setAllcourse] = useState([]);

  // USE EFFECT FOR PREVENTION OF LOADING AGAIN_N_AGAIN
  useEffect(() => {
    // URL
    const url = "http://localhost:3000/admin/courses";
    // OPTION
    const option = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    // FETCH REQUEST
    fetch(url, option)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllcourse(data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //useEffect(() => {}, [allcourse]);

  return (
    <div>
      <h1>Courses</h1>
      <div style={{ display: "flex", flexWrap: " wrap" }}>
        {allcourse.map((course) => {
          return (
            <div
              onClick={() => {
                window.location = "/courses/" + course._id;
              }}
            >
              <CourseCard
                title={course.title}
                description={course.description}
                price={course.price}
                published={course.published}
                imageLink={course.imageLink}
                key={course._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Courses;
