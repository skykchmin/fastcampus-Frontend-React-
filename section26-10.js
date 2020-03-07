// 파라미터와 인자의 차이
// 파라미터: 함수에서 값을 읽을때, 그 값들
// 인자: 함수에서 사용할 때 값을 넣어줄 때, 그 값들
// const myFunction(a) { // 여기서 a 는 파라미터
//     console.log(a); // 여기서 a 는 인자
//   }
  
  myFunction('hello world'); // 여기서 'hello world' 는 인자


  function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = sum(
    numbers[0],
    numbers[1],
    numbers[2],
    numbers[3],
    numbers[4],
    numbers[5]
  );
  console.log(result);

//// 불편하다. 만약에 sum함수를 사용 할 때 인자 부분에서 spread 를 사용하면 다음과 같이 표현이 가능합니다.


  function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = sum(...numbers);
  console.log(result);