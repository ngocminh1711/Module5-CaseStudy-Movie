import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { VscMute, VscUnmute } from "react-icons/vsc";

function Intro(props) {
  const [isMuted, setIsMuted] = useState(true);
  return (
    <IntroSection>
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height= "auto"
        volume={1}
        muted={isMuted}
        url="https://firebasestorage.googleapis.com/v0/b/ngocminh.appspot.com/o/files%2FElden%20Ring%20Opening%20Cinematic.mp4?alt=media&token=39726c6f-6f97-4c64-a390-cdb1e2558a0b"
        className="videoIntro"
      />
      <div className="infoIntro">
        <h1 className="heading">359 Flix Elite</h1>
        <p className="overview">
          {
            "359 Flix Elite Launch Campaign Director: Fernanda Weinfeld Production Company: Awake Film Agency: Akqa"
          }
        </p>
      </div>
      {isMuted ? (
        <VscMute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      ) : (
        <VscUnmute
          className="btnVolume"
          onClick={() => setIsMuted((prev) => !prev)}
        />
      )}
      <div className="fadeBottom"></div>
    </IntroSection>
  );
}

export default React.memo(Intro);

const IntroSection = styled.header`
  background-color: var(--color-background);
  position: relative;
  padding-top: 56%;
  color: var(--color-white);

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }
  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;
    padding-top : 200px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }
    .heading {
      font-size: 60px;
      transition: all 0.3s;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }
    .overview {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 170px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
  .btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s;
    transform: scale(1);
    &:hover {
      color: #fff;
      background-color: rgba(211, 211, 211, 0.178);
      transform: scale(1.2);
      transition: all 0.3s;
    }
    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 600px) {
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }
`;