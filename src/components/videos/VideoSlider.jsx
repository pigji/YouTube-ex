import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
//스와이퍼를 사용하기 위한 임포트
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import {Navigation} from 'swiper/modules';

const VideoSlider = ({ videos, title, id }) => {
  //loading상태에 true값을 할당
  const [loading, setLoading] = useState(true);

  //컴포넌트가 마운트되면 setLoading함수를 호출하여 loading값을 false상태로 업데이트
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);
  //loading이 true면 isLoading을 false면 isLoaded를 반환
  const youtubeClass = loading ? 'isLoading' : 'isLoaded';

  return (
    //youtubeClass변수 값을 클래스명으로 적용
    <section id={id} className={youtubeClass}>
      <h2>{title}</h2>
      <div className='video__slider'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper-${id}`}
          breakpoints={{
            640: {
              slidesPerView:2,
              spaceBetween:20,
            },
            768: {
              slidesPerView:3,
              spaceBetween:20,
            },
            1024: {
              slidesPerView:4,
              spaceBetween:20,
            },
            1600: {
              slidesPerView:4,
              spaceBetween:20,
            },
          }}
        >
        {videos.map((video, key) => (
          <SwiperSlide key={key}>
            <div className="video">
              <div className="video__thumb play__icon">
                <Link to={`/video/${video.videoId}`}>
                  <img src={video.img} alt={video.title} />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </section>
  )
}

export default VideoSlider