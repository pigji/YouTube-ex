import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Main from '../components/section/Main'

//동영상 플레이어 라이브러리
import ReactPlayer from 'react-player';

//아이콘
import { CiChat1 } from 'react-icons/ci';
import { CiStar } from 'react-icons/ci';
import { CiRead } from 'react-icons/ci';
import { fetchFromAPI } from '../utils/api';

const Video = () => {
  //파라미터 저장
  const {videoId} = useParams();
  //영상에 대한 데이터객체를 받을 상태관리 객체
  const [videoDetail, setVideoDetail] = useState(null);

  //파라미터로 동영상요청, statistics 객체에는 동영상에 대한 통계 포함
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
      .then((data) => {
        console.log(data);
        setVideoDetail(data.items[0])//영상데이터를 상태에 저장
      })
  },[videoId])//videoId의 변경을 감지하고 그때만 실행

  return (
    <Main
      title="유튜브 비디오 영상"
      description="유튜브 비디오 영상을 볼 수 있습니다">
      <section id='videoViewPage'>
        {/*영상에 대한 데이터가 있으면 표시 */}
        {videoDetail && (
          <div className='video__view'>
            <div className='video__play'>
              <ReactPlayer 
                playing={true}
                url={`https://www.youtube.com/watch?v=${videoId}`}
                width="100%"
                height="100%"
                style={{position:'absolute', top:0, left:0}}
              />
            </div>
            {/*타이틀과 영상에 관한 내용이 들어갈 부분 */}
            <div className='video__info'>
              <h2 className='video__title'>
                {videoDetail.snippet.title}
              </h2>
              <div className='video__channel'>
                <div className='id'>
                  <Link to={`/channel/${videoDetail.snippet.channelId}`}>{videoDetail.snippet.channelTitle}</Link>
                </div>
                <div className='count'>
                  <span className='view'>
                    <CiRead />{videoDetail.statistics.viewCount}
                  </span>
                  <span className='like'>
                    <CiStar />{videoDetail.statistics.likeCount}
                  </span>
                  <span className='commint'>
                    <CiChat1 />{videoDetail.statistics.commentCount}
                  </span>
                </div>
              </div>
              <div className='video__desc'>
                {videoDetail.snippet.description}
              </div>
            </div>
          </div>
        )}
      </section>
    </Main>
  )
}

export default Video