import fs from "fs";
function loginUser(name, email, password){
    try{
        if(fs.existsSync("todo.json")){
            let data = JSON.parse(fs.readFileSync("todo.json", "utf-8"));
            let isUser = data.some((value)=>{  //or data.find((value)) => it takes a value and return a data.
                if((value.name===name) && (value.password === password) && (value.email === email)){
                    return true
            }
            })
            if(isUser){
                return "user exist" //in case data.find, return isUser
            }
            else{
             return false   
            }
        }
    }
    catch(error){
        console.log(error);
    }

}
export default loginUser

//filter() method is used when we have to delete a data.