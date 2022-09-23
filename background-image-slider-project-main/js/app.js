const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const imageDIV = document.querySelector('.img-container')

let counter = 0
btnLeft.addEventListener("click", function(e){
  counter--
  if(counter < 0){
    counter = pictures.length -1;
  }
  imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
})
btnRight.addEventListener("click", function(e){
  counter++
  if(counter > pictures.length-1){
    counter = 0;
  }
  imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`
})