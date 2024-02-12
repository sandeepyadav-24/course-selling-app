import CourseCard from "./CourseCard";
import React from "react";
const CourseTable = (props) => {
  return (
    <div>
      <CourseCard
        imageLink={props.imageLink}
        title={props.title}
        description={props.description}
        price={props.price}
      />
    </div>
  );
};

export default CourseTable;
