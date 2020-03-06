// 객체 : 변수 혹은 상수를사용하게 될 때 하나의 이름에 여러 종류의 값을 넣게됌. 

// 객체 선언
// 키 : 원하는 값

// 비구조화 할당 (구조분해) 문법
// 비구조화 할당:


const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2

function print({ a, b }) {
    console.log(a);
    console.log(b);
  }
  
  print(object);

//   비구조화 할당시 기본값 설정

const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object);
// 1
// 2

// 비구조화 할당시 이름 바꾸기

const animal = {
    name: '멍멍이',
    type: '개'
  };
  
  const nickname = animal.name;
  
  console.log(nickname); // 멍멍이

//   animal.name 값을 nickname 값에 담고 있는데요, 이름이 같다면 그냥 우리가 이전에 배웠던 대로 비구조화 할당을 쓰면 되는데 지금은 이름이 서로 다릅니다.