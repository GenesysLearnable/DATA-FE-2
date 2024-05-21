import '../pages/ContinueWatching.css';


const DisplayedMovie = ( { movieImg, movieName }) => {
  return (
      <>
        <div className='movie-section'>
              
            <div className='image-box'>
                <img src={movieImg} alt={movieName} />
            </div>
                
            <h3>{movieName}</h3>

            <div className="progress-bar"></div>
        </div>
      </>
  )
}

export default DisplayedMovie;