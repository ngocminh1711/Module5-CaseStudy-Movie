import styled from "styled-components";


function MovieNotFound () {



    return (
        <>

                <MoviesRowContainer>
                        <h1 className="heading"> Movie Not Found</h1>
                </MoviesRowContainer>
        </>


    )
}


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
      background-color: rbg(0, 0, 0, 0.8);
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
      background-color: rbg(0, 0, 0, 0.8);
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
      background-color: rbga(0, 0, 0, 0.5);
    }
  }
`

export default MovieNotFound;