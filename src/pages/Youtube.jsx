import React, {useState, useEffect} from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCards';
import { youtubeText } from '../data/youtube';

const Youtube = () => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const youtubePageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
      title="유튜브 사이트"
      description="유튜브 사이트 튜토리얼입니다">
      <section id='youtubePage' className={youtubePageClass}>
        <h2>😋 나만의 포트폴리오 사이트를 만들고 싶다면...</h2>
        <div className='video__inner'>
          <VideoCards videos={youtubeText}/>
        </div>
      </section>
    </Main>
  )
}

export default Youtube