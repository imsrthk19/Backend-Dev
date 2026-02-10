import express from "express"
import registerUser from "../src/registerUser.js"
import loginUser from "../src/login.js"
import updateUser from "./updateUser.js";

// app.post("/signup", (req,res)=>{
//     let{name, email,password} = req.body;
//     let res = registerUser(name, email, password)
//     if(res){
//         res.send("user register")
//     }
//     else{
//         res.send(" failed")
//     }
// })

const app = express();
const port = 8080;

app.use(express.json());

app.post("/signup", createUser);
app.post("/login", login);
app.put("/user/:id", updateUser);

app.listen(port, ()=>{
    console.log("Server connected on port", port);
})