import DisplayedMovie from './DisplayedMovie';
import '../pages/ContinueWatching.css';

const MovieSection = ({ title, movies }) => {
  return (
      <section >
        <h2>{title}</h2>
        <div className="displayed-movies">
            {movies.map((movie) => (
               
                <DisplayedMovie
                    movieImg={movie.image}
                    movieName={movie.title}
                    key={movie.id}
                />
            
            ))}
      </div>
    </section>
  );
};

export default MovieSection; 