import "./section28-2.css" ;

const open = document.getElementById('open');
const close = document.getElementById('open');
const modal = document.querySelector('.modal-wrapper');

open.onclick = () => {
    modal.style.display = "flex"
}

open.onclick = () => {
    modal.style.display = "none"
}