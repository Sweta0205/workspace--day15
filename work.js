let x = "John" // 21 console "John <> Doe"
let y = "Doe"
console.log("John <> Doe")// 22 object with properties such name, surname, email
const person = {
    firstName: "John",
    lastName: "Doe",
    email: 'jdoe@example.com',

}
delete person.email; // 23 Delete the email property 
let names = ["sweta", "sai", "harika", "maninath", "yamini", "ramu", "lucky", "ricky", "hanish", "dithya"]; // 24 Create an array with 10 strings in it

for (var i = 0; i < names.length; i++) { // 25  console every string from the previous array
    console.log(names[i]);
}
var arr = [];
for (var i = 0, t = 100; i < t; i++) {  // 26 Create an array with 100 random numbers 
    arr.push(Math.round(Math.random() * t))
}
console.log(arr)

var maxValue = Math.max.apply(null, arr);// 27  maximum and minimum values from the previously created array
console.log(maxValue);

var minValue = Math.min.apply(null, arr);
console.log(minValue);

let a = Array(4).fill().map(// 28  array of arrays, in which every array has 10 random numbers
    () => Array(10).fill().map(
        () => Math.floor(Math.random() * 10)
    )
);
console.log(a);
function longestArray()  // 29 2 arrays as parameters and returns the longest one
{
    var array1 = [4, 5, 1, 3, 6];
    console.log(array1)
    var array2 = [4, 5, 1, 3, 6];
    console.log(array2)
    let len1 = array1.length;
    let len2 = array2.length;
    if (len1 > len2) {
        console.log("array1 is longest than array2")
    }
    else if (len1 == len2) {
        console.log("array1  and array2 are equals")

    }
    else {
        console.log("array2 is longest than array1")

    }
}
function sumOfArrays() {
    var array1 = [1, 2, 3, 4];
    console.log(array1)
    var array2 = [5, 6, 7, 8];
    console.log(array2)

    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < array1.length; i++) {
        sum1 = array1[i] + sum1
    }
    for (let i = 0; i < array2.length; i++) {
        sum2 = array2[i] + sum2
    }
    if (sum1 > sum2) {
        console.log("sum of array1 is greater than array2" + array1)
    }
    else if (sum1 == sum2) {
        console.log("sum of both arrays are equal")

    }
    else {
        console.log("sum of array2 is greater than array1" + array1)

    }
}
function getElement() // 31 element with an id of "container" from the page
{
    let element = document.querySelectorAll("#container");
    for (var i = 0; i < element.length; i++) {
        console.log(element[i])

    }


}
function getTd() // 32 every <td> element from the page
{
    document.querySelectorAll("table td");
    /* for (var i = 0; i < getTd.length; i++) {
         console.log(getTd[i])
 
     }*/
}

function textTd() {  // 33 loop for printing the text inside of every <td> element in the page
    let textTd = document.querySelectorAll("table td");
    for (var i = 0; i < textTd.length; i++) {
        console.log(textTd[i])

    }
}


const changeHeading = function () // 34  change the heading of the page
{
    document.querySelector("h1").innerText = "project"
}


function addRow()     // 35  add an extra row to the table
{
    var tbodyRef = document.getElementById('table').getElementsByTagName('tbody')[0]

    // Insert a row at the end of table
    var newRow = tbodyRef.insertRow()

    var cell1 = newRow.insertCell(0)
    var cell2 = newRow.insertCell(1)
    var cell3 = newRow.insertCell(2)
    var cell4 = newRow.insertCell(3)
    var cell5 = newRow.insertCell(4)
    cell1.innerHTML = "NEW NAME"
    cell2.innerHTML = "NEW IMAGE"
    cell3.innerHTML = "NEW ADDRESS"
    cell4.innerHTML = "NEW AGE"
    cell5.innerHTML = "NEW LINKS"
}

let addClassToRow = function ()// 36  class of "test" to each row in the table
{
    var test = document.querySelectorAll('div table tr')
    alert(test)
    for (var i = 0; i < test.length; i++) {
        test[i].classList.add('addClass')
    }


}

const backgroundLink = function () // 37 red background to every link in the page
{
    var anchors = document.querySelectorAll('a')
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].style.color = "red"
    }
}



const list = document.getElementById("container")

function newElememt() // 39 add new items to a unordered list
{
    const newLi = document.createElement("li")

    newLi.innerHTML = "sweta"

    list.appendChild(newLi)

}

function myDeleteFunction() {  // 40   function to empty a list
    var myList = document.getElementById('list');
    myList.innerHTML = '';
}

window.onload = function () {   //  38  "Page loaded" when the page is correctly loaded
    alert("page loaded")
};

