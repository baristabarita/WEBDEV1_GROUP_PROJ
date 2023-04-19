
// document selectors

const deleteBtn = document.querySelectorAll('.delete');
const continueBtn = document.querySelector('.continue-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const contBtn = document.getElementById('cont-btn');

// state declarations

let product;

deleteBtn.forEach(btn => btn.addEventListener('click', () => {
    console.log(btn.parentElement)
    modalOverlay.classList.add('open-modal')
}))

cancelBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})

contBtn.addEventListener('click', () => {

})