import { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // 5단계: 빈 입력이면 무시
    onAdd(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="할 일을 입력하고 엔터"
      />
    </form>
  );
}

export default TodoForm;