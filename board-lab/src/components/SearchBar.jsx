function SearchBar({ keyword, onKeywordChange }) {
  return (
    <section className="panel">
      <input
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
        placeholder="제목으로 검색"
      />
    </section>
  );
}

export default SearchBar;