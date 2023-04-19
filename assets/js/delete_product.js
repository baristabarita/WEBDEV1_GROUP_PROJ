
// document selectors

const deleteBtn = document.querySelectorAll('.delete');
const continueBtn = document.querySelector('.continue-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const contBtn = document.getElementById('cont-btn');
const prodToDelete = document.querySelector('.prod-to-delete');
const deleteModalOverlay = document.querySelector('.delete-modal');

// state declarations

let product,
    productName,
    productID;

//gets the product after clicking delete icon
deleteBtn.forEach(btn => btn.addEventListener('click', () => {
    product = btn.parentElement.parentElement
    productName = product.querySelector('.product-name').innerHTML
    productID = product.querySelector('.item-no').innerHTML
    prodToDelete.innerHTML = productName

    deleteModalOverlay.classList.add('open-modal')
}))

//closes the modal
cancelBtn.addEventListener('click', () => {
    deleteModalOverlay.classList.remove('open-modal')
})


//deletes the product
contBtn.addEventListener('click', () => {
    product.innerHTML = ''
    deleteModalOverlay.classList.remove('open-modal')
})