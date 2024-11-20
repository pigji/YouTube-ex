import React, {useState} from 'react'
//
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  //react router늬 내비게이션 처리할때 사용
  const navigate = useNavigate();
  //검색어 버튼을 클릭하거나 엔터키를 눌럿을 때 호출될 함수
  const handleSearch = () => {
    //검색어가 비어있지 않은 경우메나 내비게이션을 수행하고 검색어 초기화
    if(searchKeyword){
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword('');
    }
  }
  return (
    <div id='search'>
      <div className='search__inner'>
        <label htmlFor='searchInput'>
          <span className='ir'>검색</span>
        </label>
        <input 
          type='search'
          id='searchInput'
          placeholder='검색어를 입력해주세요'
          autoComplete='off'
          className='search__input'
          onChange={e => setSearchKeyword(e.target.value)}
          onKeyDown={e => {
            //누른 버튼이 Enter면 handleSearch함수 호출
            if(e.key === 'Enter'){
              handleSearch()
            }
          }}
        />
      </div>
    </div>
  )
}

export default Search