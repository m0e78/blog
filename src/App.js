import logo from './logo.svg';
import './App.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App ">
      <CreatePost />
      <PostList  />
    </div>
  );
}

export default App;
