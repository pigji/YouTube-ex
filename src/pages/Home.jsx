import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

//필요한 데이터를 임포트
import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'

const Home = () => {
  return (
    <Main
      title="나의 유튜브"
      description="제 유튜버 사이트에 오신 것을 환영합니다">
      <Today videos={todayText} id="today"/>
      {/*데이터, 타이틀, id를 VideoSlider로 prop으로 전달 */}
      <Developer videos={developerText} title="😍 추천 개발자를 소개합니다." id="developer"/>
      <VideoSlider videos={webdText} title="😁 웹디자인기능사 준비는 이걸로!" id="webd" />
      <VideoSlider videos={websiteText} title="😛 웹표준 사이트 만들기 기초 다지기" id="website" />
      <VideoSlider videos={portfolioText} title="🤗 포트폴리오 만드는 방법을 공유합니다." id="portfolio" />
      <VideoSlider videos={youtubeText} title="😱 지금 이 코딩을 영상으로" id="youtube" />
    </Main>
  )
}

export default Home