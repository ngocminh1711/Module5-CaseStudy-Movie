import './App.css';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import AllContents from './components/Content/AllContents';
import MovieDetail from './components/movieDetail/MovieDetail';

function App() {
  return(
    <>
      <Navbar />
      <Intro />
      <AllContents />
      <MovieDetail />
    </>   
  )
}

export default App;
