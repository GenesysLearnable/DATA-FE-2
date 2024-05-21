import './ContinueWatching.css';
import leftArrow from '/public/left-red-arrow.png';
import DisplayedMovie from '../components/DisplayedMovie';
import { WEEKLY_MOVIES, MONTHLY_MOVIES, TRIMONTHS_MOVIES} from '../components/data/data';

const ContinueWatching = () => {
  return (
    <>
      <header>
        <img src={leftArrow} alt="" />

        <div className="title">
          <h1>Continue Watching</h1>
        </div>
     </header>

      <main>

        <section className='weekly-movies'>
          <h2>A Week Ago</h2>
         
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

        <section className='one-month'>
          <h2>A Month Ago</h2>
          
          <div className="displayed-movies">
            {MONTHLY_MOVIES.map((movie) => (
              <DisplayedMovie
                movieImg={movie.image}
                movieName={movie.title}
                key={movie.id}
              />
            ))}
          </div>

        </section>

        <section className="trimonths">
          <h2>3 Months Ago</h2>
          
          <div className="displayed-movies">
            {TRIMONTHS_MOVIES.map((movie) => (
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