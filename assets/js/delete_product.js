
// document selectors

const deleteBtn = document.querySelectorAll('.delete');
const continueBtn = document.querySelector('.continue-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const contBtn = document.getElementById('cont-btn');
const prodToDelete = document.querySelector('.prod-to-delete');

// state declarations

let product,
    productName,
    productID;

deleteBtn.forEach(btn => btn.addEventListener('click', () => {
    product = btn.parentElement.parentElement
    productName = product.querySelector('.product-name').innerHTML
    productID = product.querySelector('.item-no').innerHTML
    prodToDelete.innerHTML = productName

    modalOverlay.classList.add('open-modal')
}))

cancelBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})

contBtn.addEventListener('click', () => {
    product.innerHTML = ''
    modalOverlay.classList.remove('open-modal')
})