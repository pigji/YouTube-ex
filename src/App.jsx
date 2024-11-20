import React, {Suspense, lazy} from "react";
//이 컴포넌트들은 브라우저 라우팅을 설정하고 경로별로 컴포넌트를 매핑하는데 사용
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Main from "./components/section/Main";

//lazy함수 = 코드 스플리팅을 위해 사용
//컴포넌트가 필요할때 비동기적으로 불러와서 번들 크기를 줄일 수 있다.
const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import("./pages/Today"));
const Developer = lazy(() => import("./pages/Developer"));
const Webd = lazy(() => import("./pages/Webd"));
const Website = lazy(() => import("./pages/Website"));
const Port = lazy(() => import("./pages/Port"));
const Youtube = lazy(() => import("./pages/Youtube"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));


function App() {
  return (
    //이 컴포넌트는 브라우저의 주소 히스토리 API를 사용하여 라우팅을 관리
    <Router>
      {/*fallback = Suspense 컴포넌트에서 로딩중에 표시할 컴포넌트를 지정 */}
      <Suspense fallback={<Main/>}>
        <Routes>
          {/*경로가 '/'인 경우, Home 컴포넌트로 렌더링, element prop을 사용하여 해당 경로에 대한 컴포넌트 지정 */}
          <Route path="/" element={<Home/>}/>
          <Route path="/today" element={<Today/>}/>
          <Route path="/developer" element={<Developer/>}/>
          <Route path="/webd" element={<Webd/>}/>
          <Route path="/website" element={<Website/>}/>
          <Route path="/port" element={<Port/>}/>
          <Route path="/youtube" element={<Youtube/>}/>
          <Route path="/channel/:channelId" element={<Channel/>}/>
          <Route path="/video/:videoId" element={<Video/>}/>
          <Route path="/search/:searchId" element={<Search/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
