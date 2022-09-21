let countEl =  document.getElementById("count-el")
let saveEl =  document.getElementById("save-el")
let decEl =  document.getElementById("count-el")
let count = 0;
let resetEl = document.getElementById("save-el").textContent
function increment(){
 count +=1
 countEl.innerText = count;
 if(count >= 0){
     countEl.style.color = "white"
 }

}
function decrement(){ 
    if (count > 0){
        count -=1
        decEl.innerText = count;
    }
    else{
        decEl.style.color = "red"
        count -=1
        decEl.innerText = count;
    }
   }
function save(){
    let countStr = count + " , "
    saveEl.textContent += countStr
    count = 0
    countEl.innerHTML = count;
    countEl.style.color = "white"

}
function reset(){
    document.getElementById("save-el").innerHTML = resetEl
    // reset.innerHTML = reset
}
