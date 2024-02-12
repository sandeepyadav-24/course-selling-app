const mongoose = require("mongoose");
const express = require("express");
const jwt = require("jsonwebtoken");
const { User, Admin, Course } = require("../db");
const { authJwt, secretKey } = require("../middleware/auth");

const router = express.Router();

// User routes
router.post("/signup", authJwt, (req, res) => {
  const { username, password } = req.body;
  const callback = (result) => {
    if (result) {
      res.status(403).json({ message: "Already Uer Exist" });
    } else {
      const cred = {
        username: username,
        password: password,
      };
      const newUser = new User(cred);
      newUser.save();
      const token = jwt.sign(cred, secretKey);
      res
        .status(403)
        .json({ message: "Successfuly signed Up As a new User", token: token });
    }
  };
  User.findOne({ username }).then(callback);
});

router.post("/login", authJwt, (req, res) => {
  const { username, password } = req.headers;
  const user = { username: username, password: password };

  const callback = (result) => {
    if (result) {
      const token = jwt.sign(user, secretKey);
      res.status(200).json({ message: "Logged In successfully", token: token });
    } else {
      res.status(403).json({ message: "Invalid Username and password" });
    }
  };
  User.findOne({ username, password }).then(callback);
});

router.get("/courses", authJwt, (req, res) => {
  const callback = (result) => {
    if (result) {
      res
        .status(200)
        .json({ message: "Here are all Courses", courses: result });
    } else {
      res.status(403).json({ message: "There is no Courses" });
    }
  };
  Course.find({ published: true }).then(callback);
});

router.post("/courses/:courseId", authJwt, async (req, res) => {
  const course = await Course.findById(req.params.courseId);
  console.log(course);
  if (course) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedCourses.push(course);
      await user.save();
      res.json({ message: "Course purchased successfully" });
    } else {
      res.status(403).json({ message: "User not found" });
    }
  } else {
    res.status(404).json({ message: "Course not found" });
  }
});

router.get("/purchasedCourses", authJwt, async (req, res) => {
  const user = await User.findOne({ username: req.user.username }).populate(
    "purchasedCourses"
  );
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.status(403).json({ message: "User not found" });
  }
});

module.exports = router;
