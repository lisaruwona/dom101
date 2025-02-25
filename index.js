/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

//1
function replaceText(elem, str) {
    elem.textContent = str;
}

//2
function addTextTo(elem, str) {
    if (elem){
    elem.textContent += str;
    }
}
myText = "hello";
console.log(myText, "world");

//3
function moreBears() {
    let animalElem  = document.getElementById('animals');

    animalElem.setAttribute('src', 'http://placebear.com/400/200');
    animalElem.setAttribute('alt','A bear.');
    animalElem.setAttribute('title', 'A BEAR!');
}

//4
function setId (elem,str) {
    elem.id = str;
    return elem;
}

//5
function setClass(elem, str) {
    elem.className = str;
    return elem;
}

//6
function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

//7
function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

//8
function newElement(name) {
    let createdElement = document.createElement(name);
    return createdElement;
}

//9

function findElementById(id) {
    let foundElement = document.getElementById(id);
    return foundElement;
}

//10
function findElementsByQuery(query) {
    let foundQuery = document.querySelectorAll(query);
    return foundQuery;
}

//11
function reverseList (query) {
    let arrayOfElements = [];
    let listElements = document.querySelector(query);
    arrayOfElements = Array.from(listElements.children);
    arrayOfElements.reverse();

    for (let i = 0; i < arrayOfElements.length; i++) {
        listElements.appendChild(arrayOfElements[i]);
    }
    return listElements;
}

//12
function mover (moveThis, appendToThis) {
    let movingElement = document.querySelector(moveThis);
    let appendingElement = document.querySelector(appendToThis);
    let addedElement = appendingElement.appendChild(movingElement);
    return addedElement;
}

//13
function filler(list, candidates) {
    let thisList = list; //creates list element
    for (let i=0; i < candidates.length; i++){
        let newListItem = document.createElement("li");
        newListItem.textContent = candidates[i];
        thisList.appendChild(newListItem);
    }
    return thisList;
}

//14
function dupe(selector) {
    let chosenSelector = document.querySelector(selector);
    let clonedSelector = chosenSelector.cloneNode(true);
    chosenSelector.parentNode.appendChild(clonedSelector);

    return chosenSelector;
}

//15
function removeAll(selector) {
    let chosenSelector = document.querySelectorAll(selector);
    for (let i=0; i < chosenSelector.length; i++){
        chosenSelector[i].parentNode.removeChild(chosenSelector[i]);
    }
}

//16
function getUserData () {
    const name = document.getElementById('username').value;
    const speed = Number(document.getElementById('speed').value);
    const student = document.getElementById('student').checked;

    return {name, speed, student};
}