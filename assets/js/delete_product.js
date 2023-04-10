const deleteBtn = document.querySelectorAll('.delete');
const continueBtn = document.querySelector('.continue-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const modalOverlay = document.querySelector('.modal-overlay');

deleteBtn.forEach(btn => btn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal')
}))

cancelBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal')
})