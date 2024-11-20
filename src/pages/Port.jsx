import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCards';
import { portfolioText } from '../data/portfolio';

const Port = () => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const portPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
      title="포트폴리오 사이트"
      description="포트폴리오 사이트 튜토리얼 입니다">
      <section id='portPage' className={portPageClass}>
        <h2>😋 나만의 포트폴리오 사이트를 만들고 싶다면...</h2>
        <div className='video__inner'>
          <VideoCards videos={portfolioText}/>
        </div>
      </section>
    </Main>
  )
}

export default Port