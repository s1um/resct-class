import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api.js';
import Panel from './Panel.jsx';
import PostItem from './PostItem.jsx';

function PostList() {
  const { data: posts, isPending, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isPending) {
    return (
      <Panel title="글 목록">
        <p className="empty">불러오는 중...</p>
      </Panel>
    );
  }

  if (isError) {
    return (
      <Panel title="글 목록">
        <p className="empty">불러오지 못했습니다: {error.message}</p>
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