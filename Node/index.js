const express = require("express");
const path = require("path");
const process = require("process");
require("dotenv").config();
require("./db");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const userAPIRoutes = require("./api/usersRoutes");
const categoriesAPIRoutes = require("./api/categoryRoutes");
const lecturerAPIRoutes = require("./api/lecturerRoutes");
const studentAPIRoutes = require("./api/studentRoutes");
const subjectAPIRoutes = require("./api/subjectRoutes");

app.use("/api/users", userAPIRoutes);
app.use("/api/categories", categoriesAPIRoutes);
app.use("/api/lecturers", lecturerAPIRoutes);
app.use("/api/students", studentAPIRoutes);
app.use("/api/subjects", subjectAPIRoutes);

app.set("view engine", "ejs");
app.set("views", path.join("views"));

app.use(express.static("public"));

app.locals.siteTitle = "My Website";
app.locals.currentDate = new Date().getFullYear();

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
