
// Home 목록페이지
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11


import { useState,useEffect } from 'react';
import './Home.css';
import axios from 'axios';

export function Home(){
  // 상태변수
  const [isLoading,setIsloading]=useState(true);
  const [loadCounter,setLoadCounter]=useState(0);
  const [movies,setMovies]=useState(null);
  // 읽어온 정보를 state에 저장, 객체라서 null로

  // 읽어오는 함수
  const fetchMovie = async ()=>{ 
    console.log('fetchMovie 함수 호출');
    const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
    console.log(response.data.data.movies);
    setMovies(response.data.data.movies);
    setIsloading(false);
  }
 
 
  

// 임의로 타이머를 걸어서 10초뒤에 화면이 뜨도록 함
  useEffect(
  ()=>{
    console.log('useEffect 발생');

    fetchMovie();
   
  },[loadCounter]
  
  );

  // 화면에 뿌리는
  function displayMovies(){
    return (
      <div>
      <h1>Movie List(HOME)</h1>
      <ul>
        {movies.map(item =>{
         return <li key={item.id}>{item.title}</li>
        })}
      </ul>
      </div>
    );
  }
  return (
   <div>
    {isLoading? `Loading...${loadCounter}`:displayMovies()}
   </div>
  );
}

