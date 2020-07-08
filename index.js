// Write your code here!

let main = document.body.querySelector("main#main");
main.remove();

let newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "Maura is the champion"

document.body.appendChild(newHeader)