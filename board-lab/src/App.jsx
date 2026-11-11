import { useState } from 'react';
import SearchBar from './components/SearchBar.jsx';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';
import './App.css';

const initialPosts = [
  { id: 1, title: '첫 번째 글', author: '민수', date: '10-13', likes: 3 },
  { id: 2, title: '두 번째 글', author: '지은', date: '10-14', likes: 0 },
  { id: 3, title: '세 번째 글', author: '현우', date: '10-15', likes: 7 },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

function addPost(title) {
  const newPost = { id: Date.now(), title, author: '나', date: '오늘', likes: 0 };
  setPosts([...posts, newPost]);
}

function deletePost(id) {
  setPosts(posts.filter((post) => post.id !== id));
}
 console.log(posts)
  return (
    <main>
      <SearchBar />
      <PostForm onAdd={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </main>
  );
}

export default App;