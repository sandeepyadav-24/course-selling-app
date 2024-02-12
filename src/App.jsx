import Signup from "./components/Signup";
import AppBar from "./components/AppBar";
import Login from "./components/Login";
import AddCourses from "./components/AddCourses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from "./components/Courses";
import Course from "./components/Course";
import React from "react";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <AppBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/courses/:courseId" element={<Course />}></Route>
          <Route path="/addcourses" element={<AddCourses />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
