function SearchBar() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('검색 버튼 또는 엔터');
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <div className="form-row">
        <input placeholder="검색할 제목" />
        <button>검색</button>
      </div>
    </form>
  );
}

export default SearchBar;