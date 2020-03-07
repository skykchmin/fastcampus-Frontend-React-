// rest
// rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다릅니다.

// rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다.

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  const { color, ...rest } = purpleCuteSlime;
  console.log(color);
  console.log(rest);
  

  // spread는 퍼트리는 역할, rest는 퍼져있는것들을 모아오는 역할 

  const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);

/////////////

const numbers = [0, 1, 2, 3, 4, 5, 6];

// const [..rest, last] = numbers; 배열에서의 rest는 맨 마지막에 나와야한다. 먼저 나올수 없다 