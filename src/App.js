import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AddPost from './components/AddPost';
import PostView from './components/PostView';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Routes>
          <Route path="/posts/new" component={AddPost} />
          <Route path="/posts/:id" component={PostView} />
          <Route path="/" component={Main} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;