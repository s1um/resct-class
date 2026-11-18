import { useEffect, useState } from 'react';
import { fetchPosts } from '../api.js';

function Header() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return <p>이 페이지 좋아요 합계 {totalLikes}</p>;
}

export default Header;