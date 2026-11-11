function Header({ totalLikes }) {
  return (
    <header className="panel header">
      <h1>학과 게시판</h1>
      <span>좋아요 합계 {totalLikes}</span>
    </header>
  );
}

export default Header;