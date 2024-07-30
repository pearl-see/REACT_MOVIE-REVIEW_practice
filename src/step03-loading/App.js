// 2. loading
import { useState,useEffect } from 'react';
import './App.css';

export function App(){
  // 상태변수
  const [isLoading,setIsloading]=useState(true);
  const [loadCounter,setLoadCounter]=useState(0);
 
 
  

// 임의로 타이머를 걸어서 10초뒤에 화면이 뜨도록 함
  useEffect(
  ()=>{

    // function IncreaseCounter(){
    //   let _counter = loadCounter;
    //   _counter = _counter + 1;
    //   // 카운터값이 10이상이면 Loading종료, 타이머 종료
    //   if(_counter >10){
    //     setIsLoading(false);
    //     clearInterval(loadTimer);
    //   }
    //   setLoadCounter(
    //     _counter
    //   );
    // }

    //  위 방식 보다는 밑의 방식 사용

  function IncreaseCounter(){
    setLoadCounter(prevCounter =>{
      const newCounter = prevCounter +1;
      // 상태 변수는 비동기적으로 업데이트 되기 때문에, 
      // 직접적으로 수정하는거보다는 상태업데이트 함수사용 (prevcounter)
      if(newCounter>10){
        setIsloading(false);
        clearInterval(loadTimer);
        // 로딩끝, 타이머 끝
      }
      return newCounter;
    });
    // 업데이트 형태로 만든
  }
      
    
  const loadTimer = setInterval(
  IncreaseCounter,1000
  );
  return()=>{
    clearInterval(loadTimer);
  }
  // 카운터가 종료되면 다시 반납
  },[loadCounter]

);
// loadCounter가 작동할 때마다 효솨

  return (
   <div>
    {isLoading? `Loading...${loadCounter}`:'Loaded'}
   </div>
  );
}

