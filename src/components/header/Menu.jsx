import React from 'react'

//data를 header.js로 따로 분리하고 임포트한다.
import { headerMenus, searchKeyword } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
  //해당 사이트의 주소 값을 가져오기 위해서 useLocation()훅을 사용
  const location = useLocation();
  
  return (
    <nav className='header__menu'>
      <ul className='menu'>
        {headerMenus.map((menu, key) => (
          //해당 path경로가 메뉴의 src경로와 같으면 active클래스를 추가하고 아니면 제거
          <li key={key} className={location.pathname === menu.src ? 'active' : ""}>
            <Link to={menu.src}>
              {menu.icon}{menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className='keyword'>
        {searchKeyword.map((keyword, key) => (
          //해당 path경로가 키워드의 src경로와 같으면 active클래스를 추가하고 아니면 제거
          <li key={key} className={location.pathname === keyword.src ? 'active' : ""}>
            <Link to={keyword.src}>
              {keyword.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu