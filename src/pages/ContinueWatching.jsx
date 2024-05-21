import './ContinueWatching.css';
import leftArrow from '/public/left-red-arrow.png';
import DisplayedMovie from '../components/DisplayedMovie';
import { WEEKLY_MOVIES } from '../components/data/data';

const ContinueWatching = () => {
  return (
    <>
      <header>
        <img src={leftArrow} alt="" />

        <div className="title">
          <h1>Continue Watching</h1>
        </div>
     </header>

      <main className="display-movie">
        <section className='weekly-movies'>
        
         
          <div className="displayed-movies">
          {WEEKLY_MOVIES.map((movie) => (
                <DisplayedMovie
                  movieImg={movie.image}
                  movieName={movie.title}
                  key={movie.id}
                />
              ))}
          </div>
         
        </section>
       
       
      </main>
    </>
  )
}

export default ContinueWatching;