import inquirer from "inquirer"

const age = inquirer.prompt({
    type: "number",
    message: "please enter your age",
    name: "age"
})

if(age.ui.answers.age <= 2){
    console.log("you're a baby")
} else if(age.ui.answers.age >= 2 && age.ui.answers.age <= 4){
    console.log("you're a toddler")
} else if(age.ui.answers.age >= 4 && age.ui.answers.age <= 13){
    console.log("you're a kid")
} else if(age.ui.answers.age >= 13 && age.ui.answers.age <= 20){
    console.log("you're a teenager")
} else if(age.ui.answers.age >= 20 && age.ui.answers.age <= 65){
    console.log("you're an adult")
} else if(age.ui.answers.age >= 65 && age.ui.answers.age > 65){
    console.log("you're an elder")
}