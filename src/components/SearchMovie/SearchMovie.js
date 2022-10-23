import {useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";


function SearchMovie () {
    const [keywordSearch, setKeywordSearch] = useState('')
    const [movie, setMovie] = useState()
    const navigate = useNavigate();



    const handleChange = (e) => {
        setKeywordSearch(e.target.value)
    }
    const handlePress = async (event) => {
        let keyword = keywordSearch
        if (event.key === 'Enter') {
            await axios.get(`http://localhost:8000/api/movie/search/${keyword}`).then(res =>
            {
                setMovie(res.data.movie)
            }
            )
        }

    }
    useEffect( () => {

    },[])
    console.log(keywordSearch)
        return (
            <>
                <div className="navSearch">

                    <FaSearch  className="iconSearch"/>
                        <input onChange={handleChange} onKeyPress={handlePress} type="text" placeholder="Write something ..."/>
                </div>
            </>

        )
    }
export default SearchMovie;