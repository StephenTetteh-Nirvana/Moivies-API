
const backupImage = "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWV8ZW58MHx8MHx8fDA%3D"

const MovieCard = ({movie}) => {
    return(
    <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : backupImage } alt={movie.Title}/>
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
        
    </div>
    )
}

export default MovieCard;