import {useEffect, useState} from "react";
import {FaSearch} from "react-icons/fa";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import {IconButton} from "@mui/material";
import {SearchOutlined} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {searchMovie} from "../../features/search/searchSlice";


function SearchMovie() {
    const dispatch = useDispatch();
    const [keywordSearch, setKeywordSearch] = useState('')

    const [movie, setMovie] = useState([])

    let navigate = useNavigate();


    const handleChange = (e) => {
        setKeywordSearch(e.target.value)
    }
    let getApiMovieSearch = async () => {
        return await axios.get(`http://localhost:8000/api/movie/search/${keywordSearch}`)
    }
    const handlePress = async (event) => {
        if (event.key === 'Enter') {
            dispatch(searchMovie(movie))
            navigate('/searchList')
        }
    }


    useEffect(() => {
        getApiMovieSearch().then(res => {
            setMovie(res.data.movie)
        }).catch(err => console.log({err : 'Please fill keyword to search'}))
    }, [keywordSearch])

    return (
        <>
            <div className="navSearch">

                <FaSearch className="iconSearch"/>
                <input onChange={handleChange} onKeyUp={handlePress} type="text" placeholder="Write something ..."/>
            </div>
        </>

    )
}

export default SearchMovie;