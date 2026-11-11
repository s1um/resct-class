import { useState } from 'react';

function PostForm({ onAdd }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(title);
    setTitle('');
  }

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="새 글 제목"
        />
        <button>글쓰기</button>
      </div>
    </form>
  );
}

export default PostForm;