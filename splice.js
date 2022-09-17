// insert un ou plusieurs éléments à un index spécifié (décale tout ce qu'il y a après d'un index) avec la méthode .splice

let marqueAuto = ["volvo", "Merco", "BMW", "Tesla"]

marqueAuto.splice(2,0, "Toyota", "Seat")
console.log(marqueAuto)

// Enlève un ou plusieurs éléments consécutifs avec la méthode .splice() (ses param sont l'index ou tu veux splicer, le nombre d'élement que tu veux supprimer et les éléments que tu veux ajouter (comme l'exemple précédent)

marqueAuto.splice(1,2)
console.log(marqueAuto)