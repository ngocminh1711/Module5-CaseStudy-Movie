import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './home/Home';
import SearchedMovieList from "./components/SearchMovie/SearchedMovieList";
import CreateMovie from "./components/Admin/Create/CreateMovie";
import Movie from "./components/PlayMovies/PlayMovie";
import Login from "./components/Admin/Login";
import Signup from "./components/Admin/Signup";
import Managers from "./components/Admin/Managers";


function App() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='searchList' element={<SearchedMovieList/>}/>
            <Route path='create' element={<CreateMovie/>}/>
            <Route path='/play-movie' element={<Movie/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/manager' element={<Managers/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    )
}

export default App;
