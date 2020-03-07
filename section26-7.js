// spread와 rest

// spread : 의미는 펼치다, 퍼뜨리다 입니다. 이 문법을 사용하면, 객체 혹은 배열을 펼칠수있습니다.
// spread : ... <<이것이 연산자
const slime = {
    name: '슬라임'
  };
  
  const cuteSlime = {
    name: '슬라임',
    attribute: 'cute'
  };
  
  const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);

  // 위 코드에서의 핵심은, 기존의 것을 건들이지 않고, 새로운 객체를 만든다는 것 인데요, 이러한 상황에 사용 할 수 있는 유용한 문법이 spread 입니다.

  const slime = {
    name: '슬라임'
  };
  
  const cuteSlime = {
    ...slime, // slime을 spread
    attribute: 'cute'
  };
  
  const purpleCuteSlime = {
    ...cuteSlime, // cuteslime을 spread
    color: 'purple'
  };
  
  console.log(slime);
  console.log(cuteSlime);
  console.log(purpleCuteSlime);

  // 기존 객체를 복사하고, 추가적인 값을 넣어줄 때 사용

const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

// 여러개를 사용할 수도 있음
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]