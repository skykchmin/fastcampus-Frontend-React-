const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// 이벤트 처리는 함수.이벤트명 = () => {

// }

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}
