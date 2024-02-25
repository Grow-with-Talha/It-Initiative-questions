const current_users= ['admin', 'growwithtalha', "Jhon", "Abdullah"]

const new_Users = ['admin', "JHON", "samme", "yasir"].map((user) => user.toLowerCase())



for(let i=0; i<new_Users.length; i++){
    if(current_users.map((user) => user.toLowerCase()).includes(new_Users[i])){
        console.log(`${new_Users[i]}user already exists`)
    } else {
        console.log("username is unique")
    }
}