const hamburger = document.getElementById('hamburger');
const hamburgerBarTop = document.getElementById('hamburger-bar-top');
const hamburgerBarMiddle = document.getElementById('hamburger-bar-middle');
const hamburgerBarBottom = document.getElementById('hamburger-bar-bottom');

console.log(hamburger);

hamburger.addEventListener('click', () => {
    [hamburgerBarTop, hamburgerBarMiddle, hamburgerBarBottom].forEach((el) => {
        el.classList.toggle('hamburger__bar--active');
    });
});
