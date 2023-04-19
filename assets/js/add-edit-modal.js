// Handles Add and Edit product modal

const addProductModalOverlay = document.querySelector('.add-prod');
const addProduct = document.getElementById('add-product');

//opens the modal
addProduct.addEventListener('click', () => {
    addProductModalOverlay.classList.add('open-modal');
})