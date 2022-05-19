
/*var newText='Fourth'
document.getElementById('no').innerHTML=`<b><i>${newText}</i></b>`
document.getElementById('ok').addEventListener('click',function(e){
    alert('click')
    console.log(e)
})*/
// document.getElementById('cancel').addEventListener('mousemove',function(e){
//     console.log(e.clientX+' '+e.clientY)
// })
// let mouse = document.getElementsByClassName("flex-item")
// console.log(mouse)
// for(let list of mouse){
//     list.addEventListener('mousemove',function(e){
//         console.log('X = ',e.screenX+' '+'Y = ',e.screenY)
//     })
//     list.addEventListener('click',function(e){
//         alert(list.innerText)
//     })
// }
document.getElementById('ok').addEventListener('click',function(e){
    document.getElementById('no').classList.add('toggleOn')//class list is array
    console.log(document.getElementById('no'));
})