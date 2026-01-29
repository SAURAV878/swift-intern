const title = document.getElementById('main-title');
const btn = document.getElementById('change-btn');

btn.addEventListener('click', () => {
    if (title.style.color === 'green') {
        title.style.color = 'black';
        title.innerText = 'Hello Intern!';
    } else {
        title.style.color = 'green';
        title.innerText = 'JavaScript is awesome!';
    }
});

