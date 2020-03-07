

// async/await 문법은 ES8에 해당하는 문법으로서, Promise 를 더욱 쉽게 사용 할 수 있게 해줍니다.

// 기본적인 사용법을 알아봅시다.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function process() {
    console.log('안녕하세요!');
    await sleep(1000); // 1초쉬고
    console.log('반갑습니다!');
  }
  
  process();

// async: async/await 문법을 사용할 때에는, 함수를 선언 할 때 함수의 앞부분에 async 키워드를 붙여주세요. 
// await: 그리고 Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있습니다.
//   위 코드에서는 sleep 이라는 함수를 만들어서 파라미터로 넣어준 시간 만큼 기다리는 Promise 를 만들고, 이를 process 함수에서 사용해주었습니다.
//   함수에서 async 를 사용하면, 해당 함수는 결과값으로 Promise 를 반환하게 됩니다. 따라서 다음과 같이 코드를 작성 할 수 있습니다.