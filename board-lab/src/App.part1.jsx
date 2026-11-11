import SearchBar from './components/SearchBar.jsx';
import PostList from './components/PostList.jsx';
import './App.css';

const posts = [
  { id: 1, title: '첫 번째 글', author: '민수', date: '10-13', likes: 3 },
  { id: 2, title: '두 번째 글', author: '지은', date: '10-14', likes: 0 },
  { id: 3, title: '세 번째 글', author: '현우', date: '10-15', likes: 7 },
];

function App() {
  return (
    <main>
      <SearchBar />
      <PostList posts={posts} />
    </main>
  );
}

export default App;