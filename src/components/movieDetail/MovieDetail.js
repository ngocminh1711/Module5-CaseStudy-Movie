import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { clearMovieDetail, getPlayVideo } from "../../features/movieSlice";
import Button from "@mui/material/Button";
import {SlClose} from 'react-icons/sl';
import {useNavigate} from "react-router-dom";


function MovieDetail(props) {
  const { movies, showModal } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();





  const handlePlayMovie = (video) => {
    dispatch(getPlayVideo(video))
    navigate('/play-movie')
  }

  const handleCloseBackdrop = () => {
    dispatch(clearMovieDetail());
  };

  return (
    <>
      {movies &&
        movies.map((movie, index) => (
          <MoviesDetailModel key={index}>
            <div
              className={`backdrop ${
                showModal ? "showBackdrop" : "hideBackdrop"
              }`}

              onClick={handleCloseBackdrop}
            ></div>
            <div
              className={`modal ${showModal ? "showModal" : "hideModal"}`}
              style={{
                backgroundImage: `url(${movie.detail_image})`,
                backgroundSize: "cover",
              }}
            >
              
              <div className="container">
              <SlClose className="btnClose" onClick={handleCloseBackdrop}/>
                <div className="movieInfo">
                
                  <h1 className="movieTitle">{movie.title}</h1>
                  <p className="statistical">
                    <span className="rating">Vote: {movie.vote_count}</span>
                    <span className="popularity">
                      Popularity: {movie.popularity}
                    </span>
                  </p>
                  <p className="releaseDate">
                    Release date : {movie.release_date}
                  </p>
                  <p className="runTime">Runtime : asdas</p>
                  <p className="overview">
                    <strong style={{ color: "red" }}>Overview: </strong>
                    {movie.overview}{" "}
                  </p>
                  <br />
                  <Button variant="contained" onClick={() => handlePlayMovie(movie.video)} color="error">
                    Play movie
                  </Button>
                </div>
              </div>
            </div>
          </MoviesDetailModel>
        ))}

    </>
  );
}

export default MovieDetail;

const fadeIn = keyframes`
  0%: {background: rgba(0, 0, 0, 0)};
  100%: {background: rgba(0, 0, 0, 0.6)};
`;


const MoviesDetailModel = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }

  .showBackdrop {
    display: block;
  }

  .hideBackdrop {
    display: none;
  }

  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    height: 65%;
    width: 100%;
    margin: 0 auto;
    color: var(--color-white);
    box-shadow: 0 15px 40px rgba(var(--color-dark), 0.2);
    transition: all 0.3s ease;

    @media screen and (max-width: 1184px) {
      height: 70%;
    }

    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);

      @media screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 40%,
          rgba(0, 0, 0, 0.733),
          transparent
        );
        width: 88%;
      }

      @media screen and (max-width: 980) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.95) 50%,
          transparent
        );
        width: 100%;
      }

      @media screen and (max-width: 600px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.88) 60%,
          transparent
        );
      }

      .btnClose {
        margin-top: 10px;
        margin-left: 1280px;
        width: 8%;
        height: 8%;

        &:hover {
          transform: scale(1.5);
          color: red;
        }
      }

      .movieInfo {
        width: 90%;
        height: 100%;
        padding-left: 24px;
        color: var(--color-white);
        font-size: 20px;
        padding-top: 30px;

        @media screen and (max-width: 600px) {
          font-size: 16px;
          width: 80%;
        }

        .movieTitle {
          margin-top: 30px;
        }

        .statistical {
          margin-top: 20px;
          display: flex;

          .rating {
            color: var(--color-green);
          }

          .popularity {
            color: yellow;
            margin-left: 12px;
          }
        }
        .releaseDate {
          margin-top: 12px;
        }

        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;

          @media screen and (max-width: 600px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .showModal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }

  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
`;
