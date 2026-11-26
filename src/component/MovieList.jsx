import React from 'react'
import MovieItem from './MovieItem'
import './MovieList.css'

const MovieList=(params)=> {
  return (
    <div className='MovieList'>
      <h4>Movie List🎞️</h4>
      <input placeholder="작품을 입력하세요" />
      <div className="movies-wrapper">
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </div>
    </div>
  )
}

export default MovieList