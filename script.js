var searchButton = document.getElementById('searchButton') 
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')
let sumClick = 0
function addText(){
    sumClick++
    let text = inputText.value
    console.log(text);
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.classList.add('m-2')
    newButton.setAttribute('type','button')
    newButton.innerText = text
    output.appendChild(newButton)
    document.getElementById('badge').innerHTML=sumClick
}
searchButton.addEventListener('click',addText)
inputText.addEventListener('blur',addText)