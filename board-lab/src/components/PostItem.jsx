import { useState } from 'react';

function PostItem({ post }) {
  const [likes, setLikes] = useState(post.likes);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <li className="post-item">
      <div className="post-info">
        <strong>{post.title}</strong>
        <p>작성자 {post.author} · {post.date}</p>
      </div>
      <div className="post-actions">
        <button type="button" onClick={handleLike}>
          좋아요 {likes}
        </button>
      </div>
    </li>
  );
}

export default PostItem;