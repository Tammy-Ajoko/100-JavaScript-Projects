const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const btn = document.querySelector("#btn")
const hexValue = document.querySelector("#hex-value")
const body = document.querySelector("body")
let hex = ""
function randomHex (){
    let temp = "#"
    for(let i = 0; i < 6; i++){
        let randomNum = Math.floor(Math.random()*hexValues.length)
        temp += hexValues[randomNum]
    }
    hex = temp
}
randomHex()
btn.addEventListener("click",function(){
    randomHex()
    hexValue.textContent = hex
    body.style.background = `${hex}`
})