import './styles/App.css';
import Home from './pages/Home';
import Blog from "./pages/Blog";
import UserPage from "./pages/UserPage";
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';


function App() {


  return (
    <div className="App">
      <div className='.Header'>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/users" element={<UserPage />} />
          </Route>
        </Routes>

      </div>

      <form>
        <input type='text'/>
        <input type='number'/>
        
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default App;
