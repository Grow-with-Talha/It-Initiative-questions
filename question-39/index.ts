const magician = ['Derren Brown', "penn and teller", "Harry Houdini", "criss angel"]


const print_name = (names: string[]) => {
    names.map((name) => console.log(name))
}

print_name(magician)

const make_great = (names: string[]) => {
    console.log(names.join(" the great ,"))
}

make_great(magician)