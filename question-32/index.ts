const animals = [
    {
        name: "dog",
        line: "dogs can bark"
    },
    {
        name: "rabit",
        line: "Rabits are cute"
    },
    {
        name: "parrot",
        line: "Parrots can speak."
    }
]

for(let i = 0; i < animals.length; i++){
    console.log(`${animals[i].name}: ${animals[i].line}`)
}

console.log("These all animals can be a great pet")