const longGuestList = ['Yasir', 'Samme', 'Akhtar', 'Abdulrehman', 'ahmad', 'ali']

// remove guest from the list

longGuestList.splice(2)
longGuestList.splice(3)
longGuestList.splice(4)
longGuestList.splice(5)

longGuestList.forEach((guest) => console.log(`Hello, ${guest}. I am writing this to invite you to my friends dinner.`))
