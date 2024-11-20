import React, { useEffect, useState } from 'react'
//현재 경로에서 searchId 파라미터를 가져옵니다.
import { useParams } from 'react-router-dom'

import Main from '../components/section/Main'
import VideoSearch from '../components/videos/VideoSearch'

const Search = () => {
  //사용자가 입력한 검색어를 searchId로 저장
  const {searchId} = useParams();
  //검색 결과로 받아온 비디오 목록을 담을 상태
  const [videos, setVideos] = useState([]);
  //useEffect훅으로 컴포넌트가 마운트 되거나 searchId값이 변경될 때마다 유튜브 API를 호출하여 검색 결과를 가져온다.

  //다음 페이지의 토큰을 저장, 이를 사용하여 API호출 시 다음 페이지의 결과를 가져옴
  const [nextPageToken, setNextPageToken] = useState(null);


  useEffect(() => {
    //fetch함수로 검색어와 API키를 쿼리 파라미터로 전달
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    //6. API응답을 JSON으로 파싱
    .then(response => response.json())
    .then(result => {
      console.log(result)
      //7. 결과를 setVideos함수를 사용하여 videos상태 변수에 저장
      setVideos(result.items)
      fetchVideos(searchId)
    })
    //8. 오류처리
    .catch(err => console.log(err)) //에러 발생 시 콘솔창에 출력
  }, [searchId]);

  //검색 결과를 가져오는 로직을 함수로 만듦, query(검색어)와 pageToken(다음페이지 토큰)을 인자로 받음
  const fetchVideos = (query, pageToken = '') => {
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&pageToken=${pageToken}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    .then((data) => {
      //다음 페이지의 토큰을 nextPageToken상태에 저장
      setNextPageToken(data.nextPageToken)
      //prevVideos는 실행 이전에 할당된 videos상태 값
      setVideos((prevVideos) => [...prevVideos, ...data.items])
    })
    .catch((error) => {
      console.error("Error fetching data : ", error)
    })
  }
  //더보기 버튼 클릭 시 호출되는 함수, nextPageToken이 있을때만 추가
  const handleLoadMore = () => {
    if(nextPageToken){
      fetchVideos(searchId, nextPageToken)
    }
  }


  return (
    <Main
      title="유튜브 검색"
      description="유튜브 검색 결과 페이지입니다">
      <section id='searchPage'>
        <h2>👉<em>{searchId}</em> 검색 결과입니다.</h2>
        <div className='video__inner search'>
          <VideoSearch videos={videos} />
        </div>
        <div className='video__more'>
          {nextPageToken && ( //nextPageToken값이 있을때만 button 표시
            <button onClick={handleLoadMore}>더보기</button>
          )}
        </div>
      </section>
    </Main>
  )
}

export default Search