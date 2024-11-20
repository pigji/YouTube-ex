import React,{useEffect, useState} from 'react'
import Main from '../components/section/Main'

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const developerPageClass = loading ? 'isLoading' : 'isLoaded';
  return (
    <Main
      title="추천 개발자"
      description="오늘의 추천 개발자 유튜버입니다.">

      <section id='developerPage' className={developerPageClass}>
        <h2>🥰 오늘의 추천 개발자입니다.</h2>
        <div className="developer__inner">
          {developerText.map((developer, key) => (
            <div className="developer" key={key}>
              <div className="developer__img play__icon">
                <Link to={`/channel/${developer.channelId}`}>
                  <img src={developer.img} alt={developer.name} />
                </Link>
              </div>
              <div className="developer__info">
                <Link to={`/channel/${developer.channelId}`}>
                  {developer.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default Developer