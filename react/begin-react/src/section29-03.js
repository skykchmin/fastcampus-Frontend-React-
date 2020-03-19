// 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해줍니다.

// JSX 규칙
// 1) 태그는 닫혀있어야 한다.
// 2) 

// import React from 'react';
// import Hello from './Hello';

// function App() {
//   return (
//     // <div> 
//     //   <Hello />
//     //   <Hello />
//     //   <Hello />
//     //   <div> 에러 발생, 태그가 열려있기 때문에
//     // </div>
//   );
// }

// export default App;

// fragment 
// 태그와 태그 사이에 내용이 들어가지 않을 때에는, Self Closing 태그 라는 것을 사용해야 합니다.

// import React from 'react';
// import Hello from './Hello';

// function App() {
//   return (
//     <>  
//       <Hello />
//       <div>안녕히계세요</div>
//     </>
//   );
// }

// export default App;
// 태그를 작성 할 때 이름 없이 작성을 하게 되면 Fragment 가 만들어지는데, Fragment 는 브라우저 상에서 따로 별도의 엘리먼트로 나타나지 않습니다.

// style 과 className
// JSX 에서 태그에 style 과 CSS class 를 설정하는 방법은 HTML 에서 설정하는 방법과 다릅니다.

// 우선, 인라인 스타일은 객체 형태로 작성을 해야 하며, background-color 처럼 - 로 구분되어 있는 이름들은 backgroundColor 처럼 camelCase 형태로 네이밍 해주어야 합니다.



import React from 'react';
import Hello from './Hello';
import './App.css'
function sectionjsx() {
    const name = 'react'
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
      }
  return (
    <>
    <Hello/>  
    <sectionjsx />
    
    <div style ={style}>{name}}</div> {/*괄호안에 변수를 넣으면 값을 처리할 수 있음   */}
    <div className="gray-box"></div>
    </>
  );
}

export default sectionjsx;