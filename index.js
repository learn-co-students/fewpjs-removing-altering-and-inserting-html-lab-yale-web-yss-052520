// Write your code here!

// let element = document.querySelector("p#greeting");
// element.innerHTML = 'Hello, DOM!'
// let header = document.getElementById("div#header");
// header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// element.style.backgroundColor = '#27647B';
// element.style.textAlign = 'center';
// ul.style.textAlign = 'left'
// element.className = "dog"
// element.className = "pet-listing dog"
// element.classList.remove("this-is-fine");
// element.classList.add("the-room-is-on-fire");

// ul.removeChild(ul.querySelector('li:nth-child(2)'))
// ul.remove()

document.querySelector("main#main").remove()

const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.appendChild(newHeader)