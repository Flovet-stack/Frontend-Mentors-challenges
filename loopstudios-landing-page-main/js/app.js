// selecting ui elements
const navBtn = document.querySelector('.nav-toggle-btn');
const navigator = document.querySelector('header nav');
console.log(navigator);

navBtn.addEventListener('click', () => {
    navigator.classList.toggle('show');
    navBtn.classList.toggle('show');
});