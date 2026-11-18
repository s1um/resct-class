import { useEffect, useState } from 'react';
import { fetchPosts } from '../api.js';
import Panel from './Panel.jsx';
import PostItem from './PostItem.jsx';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Panel title="글 목록">
        <p className="empty">불러오는 중...</p>
      </Panel>
    );
  }

  if (error) {
    return (
      <Panel title="글 목록">
        <p className="empty">불러오지 못했습니다: {error}</p>
      </Panel>
    );
  }

  return (
    <Panel title="글 목록">
      <ul className="posts">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </Panel>
  );
}

export default PostList;