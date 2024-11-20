import React from 'react'
//HelmetProvider 컴포넌트를 사용하여 Helmet 컴포넌트를 초기화
//Helmet 컴포넌트를 사용하여 페이지의 메타 데이터와 타이틀을 동적으로 설정
import {Helmet, HelmetProvider} from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'
import Search from './Search'


//props로 Main컴포넌트의 자식요소를 전달받음
const Main = (props) => {
  return (
    <HelmetProvider>
      {/*페이지 타이틀의 템플릿 설정, %s는 나중에 실제 타이틀로 대체됨 */}
      <Helmet
        titleTemplate='%s | My Youtube'
        defaultTitle='My Youtube'
        defer={false}
      >{/*defer가 true면 렌더링 전까지 Helmet컴포넌트가 기다림 */}
        {/*props로 전달받은 title값이 없으면 default값으로 타이틀을 태그로 넣어 줍니다. */}
        {props.title && <title>{props.title}</title>}
        <meta name='description' content={props.description}/>
      </Helmet>
      <Header />
      <main id='main' role='main'>
        <Search />
        {/*main태그의 자식요소로 전달받은 컴포넌트를 추가 */}
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>
  )
}

export default Main