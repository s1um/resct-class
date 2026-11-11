function PostItem({ post, onLike, onDelete }) {
  return (
    <li className="post-item">
      <div className="post-info">
        <strong>{post.title}</strong>
        <p>작성자 {post.author} · {post.date}</p>
      </div>
      <div className="post-actions">
        <button type="button" onClick={() => onLike(post.id)}>
          좋아요 {post.likes}
        </button>
        <button type="button" onClick={() => onDelete(post.id)}>
          삭제
        </button>
      </div>
    </li>
  );
}

export default PostItem;