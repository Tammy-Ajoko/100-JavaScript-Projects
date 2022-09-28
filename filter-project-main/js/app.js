const storeItems = document.querySelectorAll(".store-item");
const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        e.preventDefault()
        const filter = e.target.dataset.filter
        storeItems.forEach(function(item){
            if (filter === 'all'){
                item.style.display = 'block'
            }
            else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                }
                else{
                    item.style.display = 'none'
                }
            }
        })
    })
})
const searchBox = document.querySelector('#search-item')
searchBox.addEventListener("keyup", function(e){
    let searchFilter = e.target.value.toLowerCase().trim()
    storeItems.forEach(function(item){
        if(item.textContent.includes(searchFilter)){
            item.style.display = "block"
        }
        else{
            item.style.display = "none"
        }
    })
})