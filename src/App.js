import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import SearchedMovieList from "./components/SearchMovie/SearchedMovieList";
import CreateMovie from "./components/Admin/Create/CreateMovie";


function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='searchList' element={<SearchedMovieList/>}></Route>
        <Route path='create' element={<CreateMovie/>}/>
    </Routes>
  )
}

export default App;
