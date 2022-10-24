import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import SearchedMovieList from "./components/SearchMovie/SearchedMovieList";
import CreateMovie from "./components/Admin/Create/CreateMovie";
import Movie from "./components/PlayMovies/PlayMovie";


function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='searchList' element={<SearchedMovieList/>}/>
        <Route path='create' element={<CreateMovie/>}/>
      <Route path='/play-movie' element={<Movie />} />
    </Routes>
  )
}

export default App;
