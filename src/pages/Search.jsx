import React, { useEffect, useState } from 'react'
//현재 경로에서 searchId파라미터를 가져옵니다.
import { useParams } from 'react-router-dom'

import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api';

const Search = () => {
  //사용자가 입력한 검색어를 searchId로 저장
  const { searchId } = useParams();
  //검색 결과로 받아온 비디오 목록을 담을 상태
  const [videos, setVideos] = useState([]);
  //useEffect훅으로 컴포넌트가 마운트되거나 searchId가 변경될 때마다 유튜브 API를 호출하여 검색 결과를 가져옴
  
  //다음 페이지의 토큰을 저장, 이를 사용하여 API 호출 시 다음 페이지의 결과를 가져옴
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(true);

  //rapid API 사용
  useEffect(() => {
    //검색어가 변경될때마다 videos상태와 nextPageToken상태를 초기화, 새로운 검색어로 검색 결과를 다시 불러올 수 있게 함
    setVideos([]);
    fetchVideos(searchId);
    setLoading(true);
  },[searchId]) //searchId가 변경되면 useEffect함수 호출

  //검색 결과를 가져오는 로직을 함수로 추상화(만듬), query(검색어), pageToken(다음 페이지 토큰)을 인자로 받음 
  const fetchVideos = (query, pageToken = '') => {
    fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
      .then((data) => {//API요청 결과를 data매개변수로 받음
        console.log(data)
        setNextPageToken(data.nextPageToken);//다음페이지의 토큰을 상태에 저장
        setVideos((prevVideos) => [...prevVideos, ...data.items])//비디오정보를 상태에 추가
        setLoading(false);
      })
      .catch((err) => {//오류가 발생하면 에러 메시지 출력
        console.error(err)
        setLoading(false)
      })
  }

  //더보기 버튼 클릭시
  const handleLoadMore = () => {
    if(nextPageToken){
      //nextPageToken이 있을 때만 추가 데이터를 로드
      fetchVideos(searchId, nextPageToken);
    }
  }

  const searchPageClass = loading ? 'isLoading' : 'isLoaded';

  //youtube API 사용
  // useEffect(() => {
  //   //5 fetch함수로 검색어와 API키를 쿼리 파라미터로 전달
  //   fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchId}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  //     //6 API응답을 JSON으로 파싱
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result);
  //       //7 결과를 setVideos함수를 사용하여 videos상태 변수에 저장
  //       setVideos(result.items)
  //     })
  //     //8 오류 처리
  //     .catch(error => console.log(error));
  // }, [searchId]);


  return (
    <Main
      title="유튜브 검색"
      description="유튜브 검색 결과 페이지입니다">
      <section id='searchPage' className={searchPageClass}>
        <h2>😊<em>{searchId}</em> 검색 결과입니다.</h2>
        <div className='video__inner search'>
          <VideoSearch videos={videos}/>
        </div>
        {/*더보기 버튼 추가 nextPageToken이 존재할 때만 버튼을 렌더링 */}
        <div className='video__more'>
          {nextPageToken && (
            <button onClick={handleLoadMore}>더보기</button>
          )}
        </div>
      </section>
    </Main>
  )
}

export default Search