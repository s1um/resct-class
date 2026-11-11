import Panel from './Panel.jsx';
import PostItem from './PostItem.jsx';

function PostList({ posts, onLike, onDelete }) {
  return (
    <Panel title="글 목록">
      <p>전체 {posts.length}개</p>
      {posts.length === 0 ? (
        <p className="empty">보여줄 글이 없습니다.</p>
      ) : (
        <ul className="posts">
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              onLike={onLike}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </Panel>
  );
}

export default PostList;