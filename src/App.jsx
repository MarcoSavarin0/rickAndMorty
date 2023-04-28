import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RickMorty from './components/RickMorty';
import Menu from './components/Menu';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import Detail from './components/Detail';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{ minHeight: "calc(100vh - 200px)" }}>
      <Router>
        <Menu /> 
        <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/personajes' element={ <RickMorty />} />
        <Route path='/buscar' element={ <Search />} />
        <Route path='/detail/:id' element={ <Detail />} />
        </Routes>
        <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
