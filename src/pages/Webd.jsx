import React, {useEffect, useState} from 'react'
import Main from '../components/section/Main'
import VideoCards from '../components/videos/VideoCards';

import { webdText } from '../data/webd';

const Webd = () => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const webdPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
      title="웹디자인 기능사"
      description="웹디자인 기능사 튜토리얼입니다">
      <section id='webdPage' className={webdPageClass}>
        <h2>😃 웹디자인 기능사 한번에 따자!</h2>
        <div className='video__inner'>
          <VideoCards videos={webdText}/>
        </div>
      </section>
    </Main>
  )
}

export default Webd