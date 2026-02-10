import fs from "fs";
function readUsers(req, res, next) {
  try {
    let users = [];
    if (fs.existsSync("user.json")) {
      const data = fs.readFileSync("user.json", "utf-8");
      users = JSON.parse(data);
    }
    req.users = users; // attach users to request
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send("Middleware Error");
  }
}
export default readUsers;