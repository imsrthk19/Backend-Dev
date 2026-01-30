import fs from "fs";
function deleteTodo(name){
    let isFile = fs.existsSync("todo.json");
    if(!isFile) return " file is not exist";
    let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"))
    let isUser = data.some((value)=>value.name===name)
    let key = data.find((value)=>value.name===name)
    if(!isUser) return "user not exist";
    data = key.todo.pop()
    try{
    fs.writeFileSync("todo.json", JSON.stringify(data, null, 2))
    return "data delete successful"
    }
    catch(error){
        console.log(error);
    }
}
