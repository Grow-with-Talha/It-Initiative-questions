const newGuestList = ['Yasir', 'Samme', 'Akhtar',]

console.log("\n normal list")
newGuestList.forEach((guest) => console.log(`Hello, ${guest}. I am writing this to invite you to my friends dinner.`))

console.log(`Oh, ${newGuestList[2]} can't make it`)

console.log("\n replaced one guest list")


newGuestList[2] = 'Abdulrehman'



newGuestList.forEach((guest) => console.log(`Hello, ${guest}. I am writing this to invite you to my friends dinner.`))

// bigger table found
console.log("\n added more guests list")

newGuestList.push('ahmad', 'ali', 'abdullah')


newGuestList.forEach((guest) => console.log(`Hello, ${guest}. I am writing this to invite you to my friends dinner.`))