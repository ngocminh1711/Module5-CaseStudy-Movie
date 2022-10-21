import styled from "styled-components";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import {SmoothHorizontalScrolling} from '../../utils';
import {useDispatch} from 'react-redux'


function Trending(props) {

  const [movie, setMovie] = useState([]);
  const sliderRef = useRef();
  const movieRef = useRef();
  const dispatch = useDispatch()

  const handleGetDetailMovie = (item) => {
    
  }


  const getApiMovie = async () => {
    return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d03ed2a09ebe889d52f1be1bf9b8e3b5&language=en-US&page=1');
  };

  useEffect(()=>{
    getApiMovie().then(res => {
      setMovie(res.data.results)
    })
  }, []);


  const handleScrollRight = () => {
    const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    let scrollLeft = sliderRef.current.scrollLeft;
    if(scrollLeft < maxScrollLeft){
      SmoothHorizontalScrolling(sliderRef.current, 250, movieRef.current.clientWidth*2, sliderRef.current.scrollLeft)
    }
  };


  const handleScrollLeft = () => {
    let scrollLeft = sliderRef.current.scrollLeft;
    if(scrollLeft > 0){
      SmoothHorizontalScrolling(sliderRef.current, 250, -movieRef.current.clientWidth*2, sliderRef.current.scrollLeft)
    }
  };


  return (
    <>
      <MoviesRowContainer>
        <h1 className="heading">{props.title}</h1>
        <MoviesSlider ref={sliderRef} style={{
            gridTemplateColumns: `repeat(${movie.length}, 300px)`
        }}>
          {movie && movie.map((item, index) => (
            <div key={index} className="moviesItems" ref={movieRef} onClick={handleGetDetailMovie(item)}>
              <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
              <div className="moviesName">{item.title}</div>
            </div>
          ))}
        </MoviesSlider>
        <div className="btnLeft" onClick={handleScrollLeft}>
            <FiChevronLeft />
        </div>
        <div className="btnRight" onClick={handleScrollRight}>
            <FiChevronRight />
        </div>
      </MoviesRowContainer>
    </>
  );
}
export default Trending;

const MoviesRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  .heading {
    font-size: 18px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transfor-origin: center;
    cursor: pointer;
    background-color: rbga(0, 0, 0, 0.5);
    border-radios: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
        background-color : rbg(0, 0, 0, 0.8);
    }

    &:hover svg {
        opacity: 1;
        transform: scale(1.2);
    }

    svg {
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
  }

  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transfor-origin: center;
    cursor: pointer;
    background-color: rbga(0, 0, 0, 0.5);
    border-radios: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);

    &:hover {
        background-color : rbg(0, 0, 0, 0.8);
    }

    &:hover svg {
        opacity: 1;
        transform: scale(1.2);
    }

    svg {
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
  }
`;

const MoviesSlider = styled.div`
  display: grid;
  gap: 6px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .moviesItems {
    opacity: 0.5;
  }

  .moviesItems {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      z-index: 10;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .moviesName {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        text-align: center;
        font-size: 14px;
        background-color: rbga(0,0,0,0.5);
    }
  }
`;
