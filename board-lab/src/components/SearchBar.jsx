import { useState } from 'react';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('검색어:', keyword);
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="검색할 제목"
        />
        <button>검색</button>
      </div>
      <p>입력 중인 글자: {keyword}</p>
    </form>
  );
}

export default SearchBar;