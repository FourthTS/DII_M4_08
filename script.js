
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
// document.getElementById('ok').addEventListener('click',function(e){
   
//     let noElementS = document.getElementById('no')
//     if(noElementS.classList.contains('toggleOn')){
//         noElementS.classList.replace('toggleOn','toggleOff')
//     }else if(noElementS.classList.contains('toggleOff')){
//         noElementS.classList.replace('toggleOff','toggleOn')
//     }else{
//         noElementS.classList.add('toggleOn')
//     }
// })
let margin = 20
document.getElementById('ok').addEventListener('click',function(e){
    margin +=10
    let newMargin = `20px ${margin}px`
    document.getElementById('ok').style.margin = newMargin
})
showText= ['ก็','ไม่','รู้','สิ','นะ']
showIndex = 0
document.getElementById('cancel').addEventListener('click',function(e){
    showIndex++;
    console.log(showIndex);
    console.log(showText.length);
    if(showIndex >= (showText.length)){
        showIndex = 0
    }
    document.getElementById('ok').innerHTML=showText[showIndex]
    
    
    /*if(document.getElementById('ok').innerHTML === 'ok'){
        document.getElementById('ok').innerHTML='kub'
    }else if(document.getElementById('ok').innerHTML === 'kub'){
        document.getElementById('ok').innerHTML='pom'
    }*/
    
    
})
console.log();