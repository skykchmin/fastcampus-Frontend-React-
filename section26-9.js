// 함수 파라미터에서의 rest
// rest 를 함수파라미터에서 사용 할 수도 있습니다. 예를 들어서 우리가 파라미터로 넣어준 모든 값들을 합해주는 함수를 만들어주고 싶다고 가정해봅시다.

function sum(a, b, c, d, e, f, g) {
    let sum = 0;
    if (a) sum += a;
    if (b) sum += b;
    if (c) sum += c;
    if (d) sum += d;
    if (e) sum += e;
    if (f) sum += f;
    if (g) sum += g;
    return sum;
  }
  
  const result = sum(1, 2, 3, 4, 5, 6);
  console.log(result);

//위에서의 sum 함수는 7개의 파라미터를 받아오는데, 아래에서 사용 할때에는 6개만 넣어줬습니다. 그러면, g 값이 undefined 가 되기 때문에 sum 에 더하는 과정에서 += undefined 를 하게 되면 결과는 NaN 이 되버립니다. 그렇기 때문에 함수에서 하나하나 유효한 값인지 확인을 해줬지요.

// 함수의 파라미터가 몇개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 매우 유용

function sum(...rest) {
    return rest;
  }
  
  const result = sum(1, 2, 3, 4, 5, 6);
  console.log(result);

//////

function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
  }
  
  const result = sum(1, 2, 3, 4, 5, 6);
  console.log(result); // 21