// Return le premier élément correspondant à la recherche (via une callback function)

const names = ["Nicolas", "Julie", "Manon", "Margaux"]



// const namae = names.find(item => {
//     item === "Manon"
//     return item
// })

// console.log(namae)

const res = names.find(findManon)

    function findManon(item) {
        return item === "Manon"
    }

console.log(res)

// Admitedly not super Usefull, but si on veux accéder à une valeur dans un objet stocké dans un array d'objet, ca devient plus intéressant. exemple:

const persons = [{
    name : "Nicolas",
    age : 38
}, {
    name: "Julie",
    age : 32
},{
    name: "Manon",
    age: 22
}]

const age = persons.find(findJuliesAge).age

function findJuliesAge(item) {
    return item.name === "Julie"
}

console.log(age)