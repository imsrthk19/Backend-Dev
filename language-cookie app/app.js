const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let language = req.cookies.language || "en";
  let messages = {
    en: "Welcome to our website!",
    hi: "हमारी वेबसाइट में आपका स्वागत है!",
    fr: "Bienvenue sur notre site!"
  };
  res.render("home", {
    language,
    message: messages[language]
  });
});
app.post("/set-language", (req, res) => {
  let selectedLang = req.body.language;
  res.cookie("language", selectedLang, {
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});