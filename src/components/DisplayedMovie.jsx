import '../pages/ContinueWatching.css';
import meaCulpa from '/public/mea-culpa.png';

const DisplayedMovie = () => {
  return (
      <>
          <h2>This Week</h2>

          <section className="displayed-movies">
            <div className='movie-section'>
                <div className='image-box'>
                    <img src={meaCulpa} alt="" />
                </div>
                
                <h3>Mea Culpa</h3>

                <div className="progress-bar"></div>
              </div>
          </section>
         
         
      </>
  )
}

export default DisplayedMovie