// Hoisting 이해하기
// Hoisting 이란, 자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식을 의미합니다.

myFunction(); // 선언하기전에 작동했는데 js의 특징

function myFunction() {
  console.log('hello world!');
}

// Hoisting 은 자바스크립트 엔진이 갖고 있는 성질이며, Hoisting 을 일부러 할 필요는 없지만, 방지하는 것이 좋습니다. 왜냐하면 Hoisting 이 발생하는 코드는 이해하기 어렵기 때문에 유지보수도 힘들어지고 의도치 않는 결과물이 나타나기 쉽기 때문입니다.

// 변수도 hoisting이 가능하다
