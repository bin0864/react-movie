import React, {useState} from 'react'
import MovieItem from './MovieItem'
import './MovieList.css'

const MovieList = ({movies, onUpdate, onDelete}) => {
    const [search, setSearch] = useState('')

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredData = () => {
        if(search === ''){
            return movies
        }

        return movies.filter((movie) =>
            movie.title
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }

    const filteredMovies = filteredData()

    return (
        <div className='MovieList'>
            <h4>🎞️Movie List🎞️</h4>

            <input
                type="text"
                value={search}
                onChange={onChangeSearch}
                placeholder="작품을 입력하세요"
            />

            <div className="movies-wrapper">
                {filteredMovies.map((movie) => (
                    <MovieItem
                        key={movie.id}
                        {...movie}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    )
}

export default MovieList