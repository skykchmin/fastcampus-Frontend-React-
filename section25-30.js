// 프로토타입
// 프로토타입은 다음과 같이 객체 생성자 함수 아래에 .prototype.[원하는키] = 코드를 입력하여 설정 할 수 있습니다.

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
      console.log(this.sound);
    };
  }
  
  Animal.prototype.say = function() {
    console.log(this.sound);
  };
  Animal.prototype.sharedValue = 1;
  
  const dog = new Animal("개", "멍멍이", "멍멍");
  const cat = new Animal("고양이", "야옹이", "야옹");
  
  dog.say();
  cat.say();
  
  console.log(dog.sharedValue);
  console.log(cat.sharedValue);
  
  // 값을 재사용하고싶을 때 sharedvalue는 1
  // 프로토 타입 역할: 객체 생성자로 무언가를 만들었을때 객체를 만들었을 때 객체들 끼리 공유할수 있는 값이나 함수
  
  dog.say();
  cat.say();
  