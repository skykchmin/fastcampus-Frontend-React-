// 이전에는 비동기 작업을 처리 할 때에는 콜백 함수로 처리를 해야 했었는데요, 콜백 함수로 처리를 하게 된다면 비동기 작업이 많아질 경우 코드가 쉽게 난잡해지게 되었습니다.

// 한번 숫자 n 을 파라미터로 받아와서 다섯번에 걸쳐 1초마다 1씩 더해서 출력하는 작업을 setTimeout 으로 구현해봅시다.

function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝!');
        });
      });
    });
  });
});
// 이런 식의 코드를 Callback Hell (콜백지옥) 이라고 부릅니다.

// Promise 만들기
// Promise 는 성공 할 수도 있고, 실패 할 수도 있습니다. 성공 할 때에는 resolve 를 호출해주면 되고, 실패할 때에는 reject 를 호출해주면 됩니다
// promise 기본형태
const myPromise = new Promise((resolve, reject) => {
  // 구현..
})

//////////

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1); //1초뒤에 실행
    }, 1000);
  });
  
  myPromise.then(n => {
    console.log(n);
  });



  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error());
    }, 1000);
  });
  
  myPromise
    .then(n => {
      console.log(n);
    })
    .catch(error => {
      console.log(error);
    });
//   실패하는 상황에서는 reject 를 사용하고, .catch 를 통하여 실패했을시 수행 할 작업을 설정 할 수 있습니다.

// promise 만들기

function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value === 5) { // 값이 5가 된다면 실패
          const error = new Error();
          error.name = 'ValueIsFiveError';
          reject(error);
          return;
        }
        console.log(value);
        resolve(value);
      }, 1000);
    });
  }

  ////////////////
  
  increaseAndPrint(0).then((n) => {
    console.log('result: ', n);
  })

  function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value === 5) {
          const error = new Error();
          error.name = 'ValueIsFiveError';
          reject(error);
          return;
        }
        console.log(value);
        resolve(value);
      }, 1000);
    });
  }
  
  increaseAndPrint(0)
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .catch(e => {
      console.error(e);
    });