import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Playground from './components/Playground';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact  element={<Home/>} />
        <Route path="/learn/playground/:pageNumber" exact element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
