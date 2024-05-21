import './ContinueWatching.css';
import leftArrow from '/public/left-red-arrow.png';
import DisplayedMovie from '../components/DisplayedMovie';

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
        <DisplayedMovie
          date="A Week Ago"
          movieImg={src}
          movieName=""
        />
      </main>
    </>
  )
}

export default ContinueWatching