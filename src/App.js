import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import SearchedMovieList from "./components/SearchMovie/SearchedMovieList";

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='searchList' element={<SearchedMovieList/>}></Route>
    </Routes>
  )
}

export default App;
