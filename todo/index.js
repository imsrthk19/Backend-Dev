import express from "express"
import registerUser from "./src/registerUser.js"
import loginUser from "./src/login.js"

let app = express()
app.use(express.json())

app.post("/signup", (req,res)=>{
    let{name, email,password} = req.body;
    let res = registerUser(name, email, password)
    if(res){
        res.send("user register")
    }
    else{
        res.send(" failed")
    }
})
app.listen(port, ()=>{
    console.log("connect");
})