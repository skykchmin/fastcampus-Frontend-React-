// Truthy and Falsy

function print(person) {
  if (!person) {
    console.log('person이 없네요');
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);
// 이게 작동하는 이유는, undefined 와 null 은 Falsy 한 값입니다. Falsy 한 값 앞에 느낌표를 붙여주면 true 로전환됩니다.

console.log(!undefined);
console.log(!null);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
// 이 값은 모두 true 가 됩니다.

// value 가 Truthy 한 값이기 때문에, 콘솔에 메시지가 출력 될 것입니다. 
// 반면, value 가 null, undefined, 0, '', NaN 중 하나라면, 나타나지 않을 것입니다.
// 그래서 이렇게, Truthy 한 값과 Falsy 한 값을 잘 알아놓으면 조건문을 작성할 때 편할 것입니다.