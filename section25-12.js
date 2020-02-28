// 06. 객체
// 객체는 우리가 변수 혹은 상수를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해줍니다.

const ironman = {
    // key : value
    name: "멍멍이",
    age: "2",
    alias: "진돗개"
  };
  
  function print(dog) {
    const text =
      "${dog.alias}(${dog.name}) 역할을 맡은 배우는 ${dog.actor} 입니다";
    console.log(text);
  }
  
  print(ironman);
  