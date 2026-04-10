const express = require("express");
const session = require("express-session");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secretKey123",
    resave: false,
    saveUninitialized: false
  })
);

app.set("view engine", "ejs");
const users = [
  { username: "admin", password: "123", role: "admin" },
  { username: "user", password: "123", role: "user" }
];

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

function isAdmin(req, res, next) {
  if (req.session.user.role === "admin") {
    next();
  } else {
    res.render("error", {
      message: "Access Denied! Admin Only."
    });
  }
}

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    u => u.username === username &&
         u.password === password
  );
  if (user) {
    req.session.user = user;
    res.redirect("/dashboard");
  } 
  else{
    res.render("error", {
      message: "Invalid credentials"
    });
}
});

app.get(
  "/dashboard",isAuthenticated, (req, res)=>{
    res.render("dashboard", {
      user: req.session.user
    });
  });

app.get("/admin", isAuthenticated, isAdmin, (req, res) => {
    res.render("admin");
});

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});