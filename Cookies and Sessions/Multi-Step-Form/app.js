const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
  })
);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("step1");
});
app.post("/step1", (req, res) => {
  req.session.name = req.body.name;
  req.session.email = req.body.email;
  res.redirect("/step2");
});

app.get("/step2", (req, res) => {
  res.render("step2");
});

app.post("/step2", (req, res) => {
  req.session.age = req.body.age;
  req.session.city = req.body.city;

  res.redirect("/step3");
});

app.get("/step3", (req, res) => {
  res.render("step3");
});

app.post("/step3", (req, res) => {
  req.session.password = req.body.password;

  res.redirect("/result");
});

app.get("/result", (req, res) => {

  const userData = {
    name: req.session.name,
    email: req.session.email,
    age: req.session.age,
    city: req.session.city,
    password: req.session.password,
  };

  res.render("result", { userData });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});