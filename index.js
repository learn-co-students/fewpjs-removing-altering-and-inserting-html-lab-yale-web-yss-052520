// Write your code here!
function ce(element){
    return document.createElement(element)
}
function qs(selector){
    return document.querySelector(selector)
}
function qe(id){
    return document.getElementById(id)
}

let main = qe("main")
main.remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";
