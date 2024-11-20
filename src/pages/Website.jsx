import React, {useState, useEffect} from 'react'
import Main from '../components/section/Main'

import VideoCards from '../components/videos/VideoCards';
import { websiteText } from '../data/website';

const Website = () => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const websitePageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main
      title="웹표준 사이트"
      description="웹표준 사이트 튜토리얼입니다">
      <section id='websitePage' className={websitePageClass}>
        <h2>😋 웹사이트의 기초는 이 강의로~</h2>
        <div className='video__inner'>
          <VideoCards videos={websiteText}/>
        </div>
      </section>
    </Main>
  )
}

export default Website