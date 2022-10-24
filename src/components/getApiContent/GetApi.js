import axios from 'axios';

export default async function TopRatedMovies(){
    return await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d03ed2a09ebe889d52f1be1bf9b8e3b5&language=en-US&page=1')
};

export default async function GetTrendingMovies(){
    return await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d03ed2a09ebe889d52f1be1bf9b8e3b5&language=en-US&page=1')
};


export default async function GetMyMovie () {
    return await axios.get('https://localhost:8000/api/movie')
}


