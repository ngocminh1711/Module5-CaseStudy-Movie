import Intro from '../components/Intro/Intro';
import Navbar from '../components/Navbar/Navbar';
import AllContents from '../components/Content/AllContents';
import MovieDetail from '../components/movieDetail/MovieDetail';
import { useSelector } from "react-redux";

function Home(props) {
    const movieDetail = useSelector((state) => state.movie.movieDetail);
  return(
    <>
      <Navbar />
      <Intro />
      <AllContents />
      <MovieDetail movie={movieDetail} showModal={movieDetail ? true : false } />
    </>   
  )
};
export default Home;