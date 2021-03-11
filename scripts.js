const searchComponent = document.querySelector('.search');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
   searchComponent.classList.toggle('active');
})