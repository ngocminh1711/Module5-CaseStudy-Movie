

import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { VscMute, VscUnmute } from "react-icons/vsc";
import Navbar from '../Navbar/Navbar'
import {useSelector} from "react-redux";

import ScrollTop from "../ScrollTop/ScrollTop";
import RecomendMovie from "../RecomendMovie/RecomendMovie";

function Movie(props) {
    const [isMuted, setIsMuted] = useState(true);
    const videoURL = useSelector(state => state.movie.playVideo)



    return (
        <>
            <Navbar />
            <div>
                <IntroSection>
                    <ReactPlayer
                        playing={true}
                        loop={true}
                        width="70%"
                        height="70%"
                        volume={1}
                        muted={false}
                        url= {videoURL}
                        className="videoIntro"
                        controls = {true}
                    />
                    <div className="fadeBottom"></div>
                </IntroSection>
            </div>
            <RecomendMovie/>
            <ScrollTop/>
        </>

    );
}

export default React.memo(Movie);

const IntroSection = styled.header`
  background-color: var(--color-background);
  position: relative;
  padding-top: 56%;
  color: var(--color-white);

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 70px;
    margin-left: 200px;
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