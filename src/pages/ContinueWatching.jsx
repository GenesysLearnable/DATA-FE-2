import './ContinueWatching.css';
import leftArrow from '/public/left-red-arrow.png';
import MovieSection from '../components/MovieSection';
import { WEEKLY_MOVIES, MONTHLY_MOVIES, TRIMONTHS_MOVIES } from '../components/data/data';


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
        <MovieSection title="A Week Ago" movies={WEEKLY_MOVIES} />
        <MovieSection title="A Month Ago" movies={MONTHLY_MOVIES} />
        <MovieSection title="3 Months Ago" movies={TRIMONTHS_MOVIES} />
      </main>
    </>
  )
}

export default ContinueWatching;