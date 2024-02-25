interface carOption {
    [key: string]: any
}
const cars = (manufacturer: string, model: string, ...options: carOption[] ) => {
    return {
        manufacturer: manufacturer,
        model: model,
        ...options
    }
}

console.log(cars("toyota", "civic", {
    color: "green",
    suspension: "4xl"
}))