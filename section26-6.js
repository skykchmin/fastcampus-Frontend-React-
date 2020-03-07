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

// 배열 비구조화 할당
// 비구조화 할당은 객체에만 할 수 있는 것이 아닙니다. 배열에서 할 수 있어요.

const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

// 객체 비구조화 할당과 마찬가지로, 기본값 지정이 가능합니다.

const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);

// 깊은 값 비구조화 할당
// 객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법을 알아봅시다.


const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

// name, languages, value 값들을 밖으로 꺼내주고 싶다면 어떻게 해야 할까요? 이럴땐 두가지 해결 방법이 있는데요, 
// 1) 비구조화 할당 문법을 두번 사용하는 것입니다.

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}

//2) 한번에 모두 추출하는 방법을 알아보겠습니다.

const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);