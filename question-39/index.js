var magician = ['Derren Brown', "penn and teller", "Harry Houdini", "criss angel"];
var print_name = function (names) {
    names.map(function (name) { return console.log(name); });
};
print_name(magician);
var make_great = function (names) {
    console.log(names.join(" the great ,"));
};
make_great(magician);
