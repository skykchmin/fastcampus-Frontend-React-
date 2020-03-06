// 비구조화 할당 : 특정 값들을 객체에서 빼온다.
// 객체 구조분해 : 객체에서 특정값들을 추출해내는것

// print 함수를 보시면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 hero. 를 입력하고 있는데, 객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있습니다.

// 이 문법은 "객체 구조 분해" 라고 불리기도 합니다.

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
      hero.actor
    } 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);

  ///////////////

  const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };
  
  function print(hero) {
    const { alias, name, actor } = hero; //비구조화 할당, 어디에서 어떤 값을 추출할지 
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);

  ///////////////////


  const ironMan = {
    name: '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
  };
  
  const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카'
  };
  
  function print({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
  }
  
  print(ironMan);
  print(captainAmerica);