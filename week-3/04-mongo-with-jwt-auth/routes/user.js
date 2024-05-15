const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  try {
    await User.create({
      username,
      password,
    });
    res.json({
      message: "User created successfully",
    });
  } catch (e) {
    res.status(403).json({
      message: "Invalid inputs",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email and pass",
    });
  }
});

router.get("/courses", async (req, res) => {
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  // if (!course) {
  //   return res.status(404).json({ message: "No such course" });
  // }
  const user = req.user;
  // if (user.purchasedCourses.includes(courseId)) {
  //   return res.status(409).json({ message: "Course already exist" });
  // }
  user.purchasedCourses.push(courseId);
  try {
    const savedUser = await user.save();
    res.status(201).json({ message: "Course purchased successfully" });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = req.user;
  console.log(user);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.status(200).json({
    courses,
  });
});

module.exports = router;
