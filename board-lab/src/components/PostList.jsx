import Panel from './Panel.jsx';
import PostItem from './PostItem.jsx';

function PostList({ posts }) {
  return (
    <Panel title="글 목록">
      <p>전체 {posts.length}개</p>
      <ul className="posts">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </Panel>
  );
}

export default PostList;