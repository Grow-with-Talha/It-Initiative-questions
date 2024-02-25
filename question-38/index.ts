const magician_names: string[] = ['Derren Brown', "penn and teller", "Harry Houdini", "criss angel"]


const print_names = (names: string[]) => {
    names.map((name) => console.log(name))
}

print_names(magician_names)