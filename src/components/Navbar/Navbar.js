import styled from "styled-components";
import logo from "../../assets/img/395-logo.png";
import {FaSearch} from "react-icons/fa";
import {useEffect, useState} from "react";
import SearchMovie from "../SearchMovie/SearchMovie";
import {Outlet} from "react-router-dom"

function Navbar(props) {
    const [scrollY, setScrollY] = useState(0);

    const handleScrollY = () => {
        const scroll = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scroll);
    };

    useEffect(() => {
        handleScrollY();
        window.addEventListener("scroll", handleScrollY);
        return () => {
            window.removeEventListener("scroll", handleScrollY);
        };
    }, []);

    return (
        <Navigation
            style={scrollY < 5 ? {backgroundColor: 'transparent'} : {backgroundColor: 'var(--color-background)'}}>
            <div className="navContainer">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <SearchMovie/>
                </div>

            </div>

        </Navigation>
    );
}

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 65px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  .navContainer {
    background-color: transparn;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }

    .logo {
      width: 120px;
      height: 20;
      cursor: pointer;

      img {
        width: 100%;
      }
    }

    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .iconSearch {
        color: var(--color-white);
      }

      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input {
        font-size: 14px;
        border: none;
        color: var(--color-white);
        outline: none;
        width: 0px;
        padding: 10px;
        background: var(--color-background);
        border: 1px solid #fff;
        transition: width 0.5s;
        cursor: pointer;
        opacity: 0;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
