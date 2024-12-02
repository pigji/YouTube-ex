import React, {useState} from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'


const Header = () => {
  //true면 header 나타나고 false면 header가 사라짐
  const [isMenuActive, setIsMenuActive] = useState(false)
  
  //toggleMenu가 호출되면 isMenuActive값이 true 또는 false로 반전
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive)
    console.log(isMenuActive)
  }

  return (
    //header에 active클래스를 추가 또는 제거하여 토글기능을 추가합니다.
    <header id='header' role='banner' className={isMenuActive ? 'active': ''}>
      {/*toggleMenu함수를 Logo컴포넌트의 prop으로 전달 */}
      <Logo toggleMenu={toggleMenu} />
      <Menu />
      <Sns />
    </header>
  )
}

export default Header