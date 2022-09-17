// .forEach() execute une callback function sur chacun des éléments du tableau , cette function peut prendre jusqu'a 3 parametre, la valeur des éléments, leur index et un array)


let names = ["Nicolas", "Julie", "Manon", "Margaux"]

names.forEach(name => {
    console.log(name + " is the best")
})

// Autres exemples

let numbers = [1, 2, 3, 4, 5]

numbers.forEach((item, index, arr) => {
    console.log("a[" + index + "] = " + item)
})

// You can use it to calculate the sum of the elements of the array

let sum = 0

numbers.forEach(item => {sum += item})

console.log(sum)

// We can check combien de fois un élément apparait dans un array

let letters = ["a", "b", "c", "d", "a", "a", "b", "a", "d"]

let count = {}

letters.forEach(item => {
    if (count[item]) {
        count[item]++
    }else {
        count[item] = 1
    }
})

console.log(count)

//Okay this one est un peu difficile à suivre, ce qui se passe c'est qu'a chaque étape de la loop il check si l'élément est déja enregistré dans l'objet, si pas il l'ajoute et lui donne une valeur de 1, si la clé existe déja il ++ la valeur

// LA syntaxe [] est substituable pour la dot syntaxe .

let letters2 = ["a", "b", "c", "d", "a", "a", "b", "a", "d"]

let count2 = {}

letters2.forEach(item => {
    if (count2.item) {
        count2.item ++
    }else {
        count2.item = 1
    }
})

console.log(count)