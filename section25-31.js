// 객체 생성자 상속받기
// 예를 들어서 우리가 Cat 과 Dog 라는 새로운 객체 생성자를 만든다고 가정해봅시다. 그리고, 해당 객체 생성자들에서 Animal 의 기능을 재사용한다고 가정해봅시다. 그렇다면, 이렇게 구현 할 수 있습니다.

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.say = function() {
    console.log(this.sound);
  };
  Animal.prototype.sharedValue = 1;
  
  // call 의 역할: 여기서 type 대신에 call함수느 호출은 이함수에서의 this를 넣어준다.
  
  function Dog(name, sound) {
    Animal.call(this, "개", name, sound);
  }
  Dog.prototype = Animal.prototype;
  
  function Cat(name, sound) {
    Animal.call(this, "고양이", name, sound);
  }
  Cat.prototype = Animal.prototype;
  
  const dog = new Dog("멍멍이", "멍멍");
  const cat = new Cat("야옹이", "야옹");
  
  dog.say();
  cat.say();
  