import React from 'react'
import { Link } from 'react-router-dom'

//header컴포넌트에서 전달한 toggleMenu함수를 prop으로 받음
const Logo = ({toggleMenu}) => {
  return (
    <h1 className='header__logo'>
      <Link to='/'>
        {/*클릭 이벤트시 Header컴포넌트의 toggleMenu함수를 호출 */}
        <em aria-hidden="true" onClick={toggleMenu}></em>
        <span>my<br />youtube</span>
      </Link>
    </h1>
  )
}

export default Logo