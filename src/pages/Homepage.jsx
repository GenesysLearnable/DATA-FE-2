import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoMdSearch } from 'react-icons/io'
import { MovieCard } from '../components/MovieCard'
import { MovieData } from '../components/MovieData'
import { NavLink, Link } from 'react-router-dom'
import './Pages.css'

export const Homepage = () => {
  return (
    <main className='homePageMain'>
      <Navigation />
      <Toggle />
      <div>
        <SectionTitle secTitle="Recommendations" />
        <SectionTitle secTitle="Continue Watching" />
        <SectionTitle secTitle="My Watch List" />
      </div>
    </main>
  )
}

const Navigation = () => {
  return (
    <header className='navStyle'>
      <nav className='navStyle'>
        <img src="/Media Hub Logo 2 1.png" alt="logo" />
        <ul className='listStyle'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navLink active' : 'navLink'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? 'navLink active' : 'navLink'
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'navLink active' : 'navLink'
            }
          >
            Services
          </NavLink>
        </ul>
        <div className='navIcons'>
          <IoMdSearch />
          <CgProfile />
        </div>
      </nav>
    </header>
  )
}

const Toggle = () => {
  return (
    <div className='frameButtonDiv'>
      <button>Music</button>
      <button className='movieButton'>Movies</button>
    </div>
  )
}

const SectionTitle = ({ secTitle }) => {
  return (
    <section className='frameDiv'>
      <div>
        <p>{secTitle} <Link className='' to="/">See all</Link></p>
      </div>
      <div className='sectionFlex'>
        {
          MovieData.map((movie, index) => (
            <MovieCard
              key={index}
              moviePoster={movie.moviePoster}
              movieName={movie.movieName}
              movieGenre={movie.movieGenre}
              platformLogo={movie.platformLogo}
              platformName={movie.platformName}
            />
          ))
        }
      </div>
    </section>
  )
}