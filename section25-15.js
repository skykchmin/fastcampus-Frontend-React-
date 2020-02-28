const numbers = {
    a: 1,
    b: 2,
    get sum() {
      console.log("sum 함수가 실행됩니다!");
      return this.a + this.b;
    }
  };
  
  console.log(numbers.sum);
  numbers.b = 5;
  console.log(numbers.sum);
  
  // getter함수는 특정 값을 호출이 아닌 조회하려고 할때, 특정코드를 실행시키고 연산된 값을 받아서 사용하는 것
  
  const dog = {
    _name: "멍멍이",
    set name(value) {
      console.log("이름이 바뀝니다" + value);
      this.name = value;
    }
  };
  
  console.log(dog._name);
  dog.name = "뭉뭉이";
  console.log(dog._name);
  
  const number = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
      console.log("calculate");
      this.sum = this._a + this._b;
    },
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
  
    set a(value) {
      this._a = value;
      this.calculate();
    },
    set b(value) {
      this._b = value;
      this.calculate();
    }
  };
  
  console.log(number.sum);
  number.a = 5;
  number.b = 7;
  number.a = 9;
  
  //setter 함수는 특정값을 설정할 때마다 value를 parameter로 받아와서 어떤 값을 설정하는것
  
  class Person {
    constructor(name, age) {
      this._name = name;
      this.age = age;
    }
  
    get name() {
      return this._name.toUpperCase();
    }
    set name(newName) {
      if (newName) {
        this._name = newName;
      }
    }
  }
  
  let man = new Person("John", 10);
  console.log(man.name, man.age);
  man.name = "John Park";
  man.age = 20;
  console.log(man.name, man.age);
  
  // 출처: https://mygumi.tistory.com/161 [마이구미의 HelloWorld]
  
  // 이름이라는 변수는 실제 _name이 된다.
  
  // 코드를 보면 실제 데이터인 _name에 직접 접근하지 않으면서, 정의된 오퍼레이션을 통해서만 접근하고 있다.
  
  // 또한, 이름을 얻을 때, 사용자는 단순히 이름을 얻을 뿐이다.
  
  // 대문자로 가공하는 과정은 내부에서 일어날 뿐이다.
  
  // 즉, 단순히 사용자는 이름을 얻고자 할뿐, 얻는 과정에 있는 내부적인 일은 신경쓰지 않는다.
  
  // 이러한 원리가 캡슐화의 이점인 정보 은닉이 된다.
  
  // 메소드로 접근하는 것처럼 보이지 않기 때문에 외관상에도 좋다.
  
  // 이건 자바스크립트의 특징이기에, 아마 Java와 C++의 경우는 불가능할 것이다.
  
  // (사실 상 this._name에 직접 접근할 수 있지만, 배제하자)
  
  // 조금 더 나아가, 다른 예제를 통해 getter, setter를 통한 일관성 유지에 관한 예를 들어본다.
  
  // start, end, duration 3개의 변수가 있는 클래스가 존재한다.
  
  // start - 시작하는 시간
  // end - 끝나는 시간
  // duration - 지속되는 시간
  
  // 출처: https://mygumi.tistory.com/161 [마이구미의 HelloWorld]
  