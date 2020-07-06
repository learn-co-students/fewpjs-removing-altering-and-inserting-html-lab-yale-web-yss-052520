// Write your code here!
const body = document.body
document.querySelector('main#main').remove()
let newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'Lindsay is the champion'
body.appendChild(newHeader)