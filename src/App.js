import { useEffect, useState } from "react";
import MovieCard from './MovieCard'

import './App.css'
import SearchIcon from './search.svg'

const API_URL =  "http://www.omdbapi.com?apikey=e6d91473"


const App = () => {

    const [movies,setMovies]= useState([]);
    const [searchName,setSearchName] = useState('')


    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()

       setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies("Spiderman")
    },[])
    return(
        <div className="app">
            <h1>MovieLand</h1>

           <div className="search">
              <input 
              placeholder="Search for movies" 
              value={searchName}
              onChange={(e)=>setSearchName(e.target.value)}
              />
              <img src={SearchIcon}
              alt="Search"
              onClick={()=>searchMovies(searchName)}/>
            </div>

            {movies.length > 0 ? (
                <div className="container">
                     {movies.map((movie) => (
                          <MovieCard key={movie.imdbID} movie={movie}/>
                     )
                     )} 
                 </div>
                ) : (
                    <div className="empty">
                        <h2>No Movies Were Found</h2>
                    </div>
                )}
        </div>

    )
}

export default App;