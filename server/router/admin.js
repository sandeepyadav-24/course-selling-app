const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Admin, Course } = require("../db");
const { authJwt, secretKey } = require("../middleware/auth");

const router = express.Router();

router.get("/me", authJwt, (req, res) => {
  res.json({ username: req.user.username });
});

// Admin routes
router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const callback = (admin) => {
    if (!admin) {
      const cred = {
        username: username,
        password: password,
      };
      const newAdmin = new Admin(cred);
      //const token = jwt.sign(cred, secretKey);
      newAdmin.save();
      res
        .status(200)
        .json({ message: "New Admin Registered Successfully" /*token*/ });
    } else {
      res.status(403).json({ message: "Admin Already Exist " });
    }
  };
  Admin.findOne({ username }).then(callback);
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const callback = (admin) => {
    if (!admin) {
      res.status(403).json({ messsage: "Invalid Username and Password" });
    } else {
      const admin = {
        username: username,
        password: password,
      };
      const token = jwt.sign(admin, secretKey);
      res.status(200).json({ message: "Successfully Login", token });
    }
  };
  Admin.findOne({ username: username, password: password }).then(callback);
});

router.post("/courses", authJwt, (req, res) => {
  const { title, description, price, imageLink, published } = req.body;
  console.log(`${title} , ${imageLink}`);
  const course = {
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
  };

  const newCourse = new Course(course);
  newCourse.save();
  res.status(200).json({
    message: "Course Added Suceessfully",
    CourseId: newCourse.id,
    course: course,
  });
});

router.put("/courses/:courseId", authJwt, (req, res) => {
  const courseId = req.params.courseId;
  const updateCourses = req.body;
  const callback = (result) => {
    if (result) {
      res.status(200).json({ message: "Courses Updated Successfully" });
    } else {
      res.status(403).json({ message: "Course not found" });
    }
  };
  Course.findByIdAndUpdate(courseId, updateCourses).then(callback);
});

router.get("/courses", authJwt, (req, res) => {
  const callback = (courses) => {
    res
      .status(200)
      .json({ message: "Course Fetched Successfully ", courses: courses });
  };
  Course.find({}).then(callback);
});

router.get("/courses/:courseId", authJwt, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({ course });
  console.log(course);
});

module.exports = router;
