// 비동기적 처리의 이해
// 만약 작업을 동기적으로 처리한다면 작업이 끝날 때까지 기다리는 동안 중지 상태가 되기 때문에 다른 작업을 할 수 없습니다. 그리고 작업이 끝나야 비로소 그 다음 예정된 작업을 할 수 있죠. 하지만 이를 비동기적으로 처리를 한다면 흐름이 멈추지 않기 때문에 동시에 여러 가지 작업을 처리할 수도 있고, 기다리는 과정에서 다른 함수도 호출할 수 있습니다.

function work() {
    const start = Date.now();
    for (let i = 0; i < 10000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
  
  work();
  console.log('다음 작업');

  //////////

  function work() {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 0); // settimeout : 첫번째 파라미터는 함수형태, 두번째 파라미터는 특정 시간이 지나면 함수를 실행하겠다는 의미 
  }
  
  console.log('작업 시작!');
  work();
  console.log('다음 작업');

  // setTimeout 함수는 첫번째 파라미터에 넣는 함수를 두번째 파라미터에 넣은 시간(ms 단위)이 흐른 후 호출해줍니다. 지금은 두번째 파라미터에 0을 넣었습니다. 따라서, 이 함수는 바로 실행이 됩니다

  function work(callback) {
    setTimeout(() => {
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
      callback();
    }, 0);
  }
  
  console.log('작업 시작!');
  work(() => {
    console.log('작업이 끝났어요!')
  });
  console.log('다음 작업');

//   그렇다면, 만약에 work 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면 어떻게 해야 할까요? 이럴 땐, 콜백 함수를 파라미터로 전달해주면 됩니다. 콜백 함수란, 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은 함수를 특정 작업이 끝나고 호출을 해주는 것을 의미합니다.

// 비동기 처리로 하는 일

// Ajax Web API 요청: 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리합니다.
// 파일 읽기: 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리합니다.
// 암호화/복호화: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리합니다.
// 작업 예약: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리합니다.