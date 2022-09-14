let myVariable = "value";
// console.log(myVariable);
// console.log(typeof myVariable);

myVariable = 1;
// console.log(myVariable);
// console.log(typeof myVariable);

myVariable = true;
// console.log(myVariable);
// console.log(typeof myVariable);

let myVariable2 = "szoveg";
myVariable = myVariable2;
// console.log("myvariable2= ", myVariable2);

let myVariable3 = myVariable2 + myVariable;
// console.log("myvariable3= ", myVariable3);

function sumVariables(Variable1,Variable2) {
    console.log(Variable2 + Variable1)
}

sumVariables("word","car");
sumVariables(8,3);
sumVariables(12,"89");

function loadEvenet () {
    console.log ("loaded");
    let rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML ("beforeend", "Hello world");
}

window.addEventListener ("click", loadEvenet);