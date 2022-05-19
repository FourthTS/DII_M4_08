

var outputContainer = document.getElementById('out-container')
var counter = 0
function addNode(){
    newNode = document.createElement('div')
    newNode.classList.add('flex-item')
    newNode.setAttribute('id',counter)
    newNode.innerText = counter
    counter=counter+1
    newNode.innerText = counter
    outputContainer.appendChild(newNode)
}
function onOKClick(e){
    addNode();
}