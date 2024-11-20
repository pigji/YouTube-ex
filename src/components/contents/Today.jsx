import React, {useState, useEffect} from 'react'

//import { todayText } from '../../data/today'
import { Link } from 'react-router-dom'

const Today = ({videos, id}) => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const todayClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <section id={id} className={todayClass}>
      <div className='today__inner'>
        <div className='today__thumb play__icon'>
          <Link to={videos[0].page}>
            <img src={videos[0].img} alt={videos[0].title} />
          </Link>
        </div>
        <div className='today__text'>
          <span className='today'>today!</span>
          <h3 className='title'>
            <Link to={videos[0].page}>
              {videos[0].title}
            </Link>
          </h3>
          <p className='desc'>{videos[0].desc}</p>
          <div className='info'>
            <span className='author'>
              <Link to={`/channel/${videos[0].channelId}`}>
                {videos[0].author}
              </Link>
            </span>
            <span className='date'>
              {videos[0].date}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Today