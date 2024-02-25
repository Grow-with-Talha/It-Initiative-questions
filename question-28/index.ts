// run npm start to run this program
import inquirer from "inquirer"
const usernames = ["admin", "hassan", "samme", "yasir", "Talha"]

const username = inquirer.prompt({
    name: "input",
    message: "Enter your username",
    type: "input"
}).then((value) => {
    validate(value.input)
}).catch((err) => {
    console.log(err)
})

const validate = (value: string) => {
        if(usernames.includes(value)) {
            if(value === "admin") {
                console.log("Hello admin, would you like to see a status report?")
            } else {
                console.log(`Hello ${value}. Thanks for logging again.`)
            }
        } else if(usernames.length === 0){
                console.log("we need to find new users")
        } else {
            console.log("username not found")
        }
    
}