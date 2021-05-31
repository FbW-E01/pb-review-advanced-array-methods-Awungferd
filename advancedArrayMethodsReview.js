// # Review - Advanced array methods

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use advanced array methods for all of these(forEach, map, etc.).You might have to search for an appropriate method to use on MDN.

// 1. Create an array with 10 objects, each of them should have a "name" property and a "URL" property and a "number" property.
const tenObjArr = [
    { name: "Juno", URL: "www.juno.com", number: 0567757452 },
    { name: "Mathew", URL: "https://www.mathew.com", number: 0457455677562 },
    { name: "Henry", URL: "https://www.ryneh.com", number: 056454177562 },
    { name: "Alfred", URL: "www.fredo-same.com", number: 05615751277562 },
    { name: "Janus", URL: "www.two-faced.com", number: 051452677562 },
    { name: "Iris", URL: "www.iris-iris.com", number: 056725217562 },
    { name: "Isis", URL: "https://www.isis-isis.com", number: 05677554562 },
    { name: "Imhotep", URL: "www.imhotep.com", number: 05675254567562 },
    { name: "Ras Tafari", URL: "www.rastafari.com", number: 056745547562 },
    { name: "Asong", URL: "https://www.asong.com", number: 056772521562 },
    { name: "Defang", URL: "www.defang.com", number: 056771242562 },
]

// 2. Then based on the array, create a new array that contains just the names.
function extractNames(names) {
    tenObjArr.forEach(function (person) {
        console.log(person.name)
    }
    )
}
extractNames()
//===========================================
// 3. Go through the array and check each individual URL property - if the URL starts with "http", print the URL.
//Otherwise, print "Invalid URL for" and the value of the name property.




    tenObjArr.forEach(function (link) {

if (link.URL.startsWith("https")) {console.log(link.URL)

} else {
    console.log(`Invalid url for ${link.name}`)
}


    })

/*
tenObjArr.forEach(link => {

    if (link.URL.startsWith("https")) {
        console.log(link.name+ "'s", "domain is:", link.URL)
return
    }console.log(`Invalid url for ${link.name}`)


}) */

// 4. Sort the array to a random order.
tenObjArr.sort(sorted => {
    return 0.5 -Math.random()
})
console.log("The assorted array", tenObjArr)
// 5. Sort the array based on the "number" property, with the lowest number first.
console.log("====================================")

 tenObjArr.sort(function (a, b) {
    return b.number - a.number
})
console.log(tenObjArr)
console.log("====================================")


// 6. Sort the array based on the "number" property, with the highest number first.
console.log("====================================")

 tenObjArr.sort(function (a, b) {
    return a.number - b.number
})
console.log(tenObjArr)
console.log("====================================")
// 7. Based on the array, create a string with all of the names of the people in the array separated by a comma and then replace the last comma with the string`" and "`.
let str = tenObjArr.reduce(function (a, b) {
    return a+b.name +", "
} ,""

)
console.log([str])
