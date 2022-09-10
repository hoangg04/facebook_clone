let cardItem = document.querySelectorAll(".card_item"),
	deleteButton = document.querySelectorAll(".delete-button");

cardItem.forEach(el =>{
    el.addEventListener('click',()=>{
        deleteButton.forEach(item =>{
            item.addEventListener('click',()=>{
                el.style.display = 'none';
            })
        })
    },true)
})