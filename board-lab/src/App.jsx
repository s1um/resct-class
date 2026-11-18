import { useState } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '4주차 복습', done: false },
    { id: 2, text: 'React 문서 읽기', done: true },
  ]);

  // 1단계: 추가
  function addTodo(text) {
    // 여기에 작성
  }

  // 2단계: 완료 토글
  function toggleTodo(id) {
    // 여기에 작성
  }

  // 3단계: 삭제
  function deleteTodo(id) {
    // 여기에 작성
  }

  // 4단계: 남은 개수
  const remaining = 0; // 여기를 고치기

  return (
    <div className="todo-app">
      <h1>할 일</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <p>{remaining}개 남음</p>
    </div>
  );
}

export default App;