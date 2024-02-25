const describe_country = (city: string, country: string = "Pakistan") => {
    console.log(`${city} is in ${country}`)
}


describe_country("lahore")
describe_country("karachi")
describe_country("london", "newyork")