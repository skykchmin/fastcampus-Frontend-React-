// 클래스

// ES6 에서부터는 class 라는 문법이 추가되었는데요, 우리가 객체 생성자로 구현했던 코드를 조금 더 명확하고, 깔끔하게 구현 할 수 있게 해줍니다. 추가적으로, 상속도 훨씬 쉽게 해줄 수 있습니다.

class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  const dog = new Animal("개", "멍멍이", "멍멍");
  const cat = new Animal("고양이", "야옹이", "야옹");
  
  dog.say(); // 멍멍
  cat.say(); // 야옹

// 여기서 우리가 say 라는 함수를 클래스 내부에 선언하였는데요, 클래스 내부의 함수를 '메서드'라고 부릅니다. 이렇게 메서드를 만들면 자동으로 prototype 으로 등록이 됩니다.

class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  class Dog extends Animal {
    constructor(name, sound) {
      super('개', name, sound);
    }
  }
  
  class Cat extends Animal {
    constructor(name, sound) {
      super('고양이', name, sound);
    }
  }
  
  const dog = new Dog('멍멍이', '멍멍');
  const cat = new Cat('야옹이', '야옹');
  
  dog.say();
  cat.say();

  