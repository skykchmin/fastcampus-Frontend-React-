// promise all, promise.race

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000); //1초 후에 실행
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500); //500ms초 후에 실행
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const dog = await getDog();
    console.log(dog);
    const rabbit = await getRabbit();
    console.log(rabbit);
    const turtle = await getTurtle();
    console.log(turtle);
  }
  
  process();

  // 현재 위 코드에서는 getDog 는 1초, getRabbit 은 0.5초, getTurtle 은 3초가 걸리고 있습니다. 이 함수들을 process 함수에서 연달아서 사용하게 되면서, process 함수가 실행되는 총 시간은 4.5초가 됩니다.

// 지금은 getDog -> getRabbit -> getTurtle 순서대로 실행이 되고 있는데요, 하나가 끝나야 다음 작업이 시작하고 있는데, 동시에 작업을 시작하고 싶다면, 다음과 같이 Promise.all 을 사용해야합니다.

// 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]); //동시에 시작한 후에 마지막에 끝나는것 후에 끝남. 3초걸림

    console.log(results);
  }
  
  process();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const [dog, rabbit, turtle] = await Promise.all([ //
      getDog(),
      getRabbit(),
      getTurtle()
    ]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
  }
  
  process()

  ///

// Promise.race : Promise.all 과 달리, 여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난것 하나만의 결과값을 가져옵니다.
// promise.race는 가장 빨리 끝나는것이 에러가 나지 않는다면 후에 끝나는것이 error가 생기더라도 error로 간주하지 않는다.
//
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };

  ////////////////////

  async function process() {
    const first = await Promise.race([
      getDog(),
      getRabbit(),
      getTurtle()
    ]);
    console.log(first);
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };
  
  async function process() {
    const first = await Promise.race([
      getDog(),
      getRabbit(),
      getTurtle()
    ]);
    console.log(first);
  }
  
  process();

  process();