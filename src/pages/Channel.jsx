import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { fetchFromAPI } from '../utils/api'

import Main from '../components/section/Main'

import { CiBadgeDollar } from 'react-icons/ci'
import { CiMedal } from 'react-icons/ci'
import { CiRead } from 'react-icons/ci'

//검색창 임포트
import VideoSearch from '../components/videos/VideoSearch'

const Channel = () => {
  const {channelId} = useParams();//파라미터로 전달된 채널아이디를 저장
  // console.log(channelId)
  const [channelDetail, setChannelDetail] = useState();
  const [loading, setLoading] = useState(true);
  //영상 데이터 상태
  const [channelVideo, setChannelVideo] = useState([])
  //다음 영상의 토큰을 저장
  const [nextPageToken, setNextPageToken] = useState(null);

  //channelId가 변경되면 채널아이디값에 해당하는 데이터를 불러오는 함수
  useEffect(() => {
    //함수 생성
    const fetchResults = async () => {
      try{//성공시 실행
        const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
        console.log(data)
        setChannelDetail(data.items[0])
        //영상을 최근 날짜순으로 요청
        const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`)
        //불러온 영상을 상태에 저장
        setChannelVideo(videosData?.items)
        //토큰을 상태에 저장
        setNextPageToken(videosData?.nextPageToken)
      } catch(error) { //실패시 실행
        console.error(error)
      } finally { //요청이 실패하던 성공하던 무조건 실행되는 구문
        setLoading(false);//API 응답이 완료되면 loading을 false로 변경
      }
    }
    fetchResults();//fetchResults함수 호출
  }, [channelId])
  //로딩이 완료되면 isLoaded가 변수에 할당됨
  const channelPageClass = loading ? 'isLoading' : 'isLoaded';

  //다음 영상을 불러오는 함수
  const loadMoreVideos = async () => {
    if(nextPageToken){
      const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`)
      //기존에 상태에 저장된 영상데이터를 그래도 구조분해할당으로 배열로 할당하고 새로 추가된 영상데이터를 구조분해할당으로 배열에 추가 줍니다.
      setChannelVideo(prevVideos => [...prevVideos, ...videosData.items])
      //다음 영상이 있으면 토큰을 또한번 상태에 할당
      setNextPageToken(videosData?.nextPageToken)
    }
  }

  return (
    <Main
      title="유튜브 채널"
      description="유튜브 채널페이지입니다.">
      <section id='channel' className={channelPageClass}>
        {channelDetail && (
          <div className='channel__inner'>
            {/*채널의 배너 이미지 */}
            <div className='channel__header' style={{
              backgroundImage: `url(${channelDetail.brandingSettings.image.bannerExternalUrl})` }}>
              <div className='circle'>
                <img 
                  src={channelDetail.snippet.thumbnails.high.url} 
                  alt={channelDetail.snippet.title}  
                />
              </div>
            </div>
            <div className='channel__info'>
              <h3 className='title'>{channelDetail.snippet.title}</h3>
              <p className='desc'>{channelDetail.snippet.description}</p>
              <div className='info'>
                <span>
                  <CiBadgeDollar />
                  {channelDetail.statistics.subscriberCount}
                </span>
                <span>
                  <CiMedal />
                  {channelDetail.statistics.videoCount}
                </span>
                <span>
                  <CiRead />
                  {channelDetail.statistics.viewCount}
                </span>
              </div>
            </div>
            {/*VideoSerch컴포넌트로 영상 표시 */}
            <div className='channel__video video__inner search'>
              <VideoSearch videos={channelVideo}/>
            </div>
            {/*더보기 버튼 추가 */}
            <div className='channel__more'>
              {nextPageToken && (
                <button onClick={loadMoreVideos}>더보기</button>
              )}
            </div>
          </div>
        )}
      </section>
    </Main>
  )
}

export default Channel