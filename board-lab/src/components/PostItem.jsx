import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likePost, deletePost } from '../api.js';

function PostItem({ post }) {
  const queryClient = useQueryClient();

  const like = useMutation({
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const remove = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const isBusy = like.isPending || remove.isPending;

  return (
    <li className="post-item">
      <div className="post-info">
        <strong>{post.title}</strong>
        <p>작성자 {post.author} · {post.date}</p>
      </div>
      <div className="post-actions">
        <button type="button" onClick={() => like.mutate(post)} disabled={isBusy}>
          {like.isPending ? '좋아요 중...' : `좋아요 ${post.likes}`}
        </button>
        <button
          type="button"
          onClick={() => {
            if (window.confirm('삭제할까요?')) {
              remove.mutate(post.id);
            }
          }}
          disabled={isBusy}
        >
          {remove.isPending ? '삭제 중...' : '삭제'}
        </button>
      </div>
    </li>
  );
}

export default PostItem;
