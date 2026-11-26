import { useState, useRef } from 'react'
import Header from './component/Header'
import MovieList from './component/MovieList'
import MovieEditor from './component/MovieEdit'
import './App.css'

const mocData = [
    {
        id: 0,
        isDone: false,
        title: "극장판 치이카와: 인어 섬의 비밀",
        rating: 5,
        date: new Date().getTime()
    },
    {
        id: 1,
        isDone: false,
        title: "오디세이",
        rating: 4,
        date: new Date().getTime()
    },
    {
        id: 2,
        isDone: false,
        title: "듄: 파트 1",
        rating: 3,
        date: new Date().getTime()
    }
]

function App() {
    const [movies, setMovies] = useState(mocData)
    const idRef = useRef(3)

    const onCreate = (title, rating) => {
        const newMovie = {
            id: idRef.current++,
            isDone: false,
            title: title,
            rating: Number(rating),
            date: new Date().getTime()
        }

        setMovies([newMovie, ...movies])
    }

    const onUpdate = (targetId, updates) => {
        setMovies((prev) =>
            prev.map((movie) =>
                movie.id === targetId
                    ? {...movie, ...updates}
                    : movie
            )
        )
    }

    const onDelete = (targetId) => {
        setMovies((prev) =>
            prev.filter((movie) => movie.id !== targetId)
        )
    }

    return (
        <div className='App'>
            <Header />
            <MovieEditor onCreate={onCreate} />
            <MovieList
                movies={movies}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        </div>
    )
}

export default App