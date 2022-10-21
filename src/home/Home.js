import Intro from '../components/Intro/Intro';
import Navbar from '../components/Navbar/Navbar';
import AllContents from '../components/Content/AllContents';
import MovieDetail from '../components/movieDetail/MovieDetail';
import { useSelector } from "react-redux";
import ScrollTop from "../components/ScrollTop/ScrollTop";

function Home(props) {
    const movieDetail = useSelector((state) => state.movie.movieDetail);
  return(
    <>
      <Navbar />
      <Intro />
      <AllContents />
        <ScrollTop/>
      <MovieDetail movie={movieDetail} showModal={movieDetail ? true : false } />
    </>   
  )
};
export default Home;