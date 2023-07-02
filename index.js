// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    var copyOfCats = [...cats, name];
    return copyOfCats;
}

function prependCat(name) {
    var copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat(name) {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(name) {
    return cats.slice(1);
}