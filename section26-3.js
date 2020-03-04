const dog = {
  name: '멍멍이'
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);
// 이렇게 하면 animal 값이 주어지지 않아도, 에러가 발생하지 않게 됩니다.이러한 코드를 논리 연산자를 사용하면 코드를 단축시킬 수 있습니다.

//   &&
//   연산자로 코드 단축시키기
// 이렇게 코드를 작성해보세요.

const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal && animal.name;
}

const name = getName();
console.log(name); // undefined


console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye :앞에있는 것이 true라면 뒤에있는것이 결과 
console.log(null && 'hello'); // null : 앞에있는것이 falsy한 값이면 앞에있는 값이 그대로 결과
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0 : 앞에있는것이 falsy한 값이면 false
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.